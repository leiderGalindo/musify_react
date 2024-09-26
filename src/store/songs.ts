import { type Song, type Album, type AlbumDetail } from "../components/types"
import { create } from "zustand"
import { persist } from 'zustand/middleware'
import { getToken } from "../services/token"
import { getSongs } from "../services/songs"
import { getAlbums } from "../services/albums"
import { getAlbum } from "../services/album"

const initialValueAlbum = {
  id: '',
  preview: '',
  name: '',
  artist: '',
  link: '',
  release_date: '',
  tracks: []
}

interface State {
  songList: Song[]
  listOfAlbums: Album[]
  album: AlbumDetail
  currentSong: {}
  statusMenu: string
  token: string
  listingStyle: string
  tokenExpiresIn: number
  getToken: () => void
  fetchSongs: (SearchParameter: string) => void
  fetchAlbums: () => void
  fetchAlbumDetail: (Id: string) => void
  selectSong: (songId: string) => void
  ChangeMenuStatus: () => void
  ChangeListingStyle: () => void
}

export const useSongsStore = create<State>()(persist((set, get) => ({
  songList: [],
  listOfAlbums: [],
  album: initialValueAlbum,
  currentSong: {},
  statusMenu: '',
  token: '',
  listingStyle: 'grid',
  tokenExpiresIn: 0,

  getToken: async () => {
    const response = await getToken()
    if(response.access_token){
      const newToken = response.access_token
      const expiresIn = new Date(new Date().getTime() + (60 * 60000))
      const NewExpiresIn = expiresIn.getTime()
      
      set({ token: newToken, tokenExpiresIn: NewExpiresIn })
    }
  },

  fetchSongs: async (SearchParameter: string) => {
    const { token } = get()
    const { tokenExpiresIn } = get()
    const { getToken } = get()

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken() 
    }

    const response = await getSongs({ token, SearchParameter })
    const newTrackList = (response ?? [])
    
    if(newTrackList)
      set({ songList: newTrackList })
  },

  fetchAlbums: async () => {
    const { token } = get()
    const { tokenExpiresIn } = get()
    const { getToken } = get()

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken() 
    }

    const response = await getAlbums({ token })
    const newListOfAlbums = (response ?? [])
    
    if(newListOfAlbums)
      set({ listOfAlbums: newListOfAlbums })
  },

  fetchAlbumDetail: async (Id: string) => {
    set({ album: initialValueAlbum })
    const { token } = get()
    const { tokenExpiresIn } = get()
    const { getToken } = get()

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken() 
    }

    const response = await getAlbum({ token, Id })
    const newAlbumDetail = (response ?? [])
    
    if(newAlbumDetail)
      set({ album: newAlbumDetail })
  },

  selectSong: (songId: string) => {
    console.log(songId);
    
  },

  ChangeMenuStatus: () => {
    const { statusMenu } = get()      
    const NewMenuStatus = ((statusMenu === 'menuActive') ? '' : 'menuActive')

    set({ statusMenu: NewMenuStatus })
  },

  ChangeListingStyle: () => {
        const { listingStyle } = get()
        
        const NewListingStyle = (((listingStyle ?? '') === 'grid') ? 'list' : 'grid')
        
        sessionStorage.setItem('listingStyle', NewListingStyle);

        set({ listingStyle: NewListingStyle})
  }

}),{
    name: 'listingStyle'
}))
