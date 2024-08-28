import { type Song } from "../components/types"
import { create } from "zustand"
import { persist } from 'zustand/middleware'
import { getToken } from "../services/token"
import { getSongs } from "../services/songs"

interface State {
  songList: Song[]
  currentSong: Song
  token: string
  tokenExpiresIn: number
  getToken: () => void
  fetchSongs: (SearchParameter: string) => void
  selectSong: (songId: number) => void
  statusMenu: string
  listingStyle: string
  ChangeMenuStatus: () => void
  ChangeListingStyle: () => void
}

export const useSongsStore = create<State>()(persist((set, get) => {
  return {
    songList: [],
    currentSong: {},
    statusMenu: '',
    token: '',
    listingStyle: 'grid',

    getToken: async () => {
      const response = await getToken()
      if(response.access_token){
        const newToken = response.access_token
        const expiresIn = new Date(new Date().getTime() + (60 * 60000))
        const NewExpiresIn = expiresIn.getTime()
        
        set({ token: newToken, tokenExpiresIn: NewExpiresIn })
      }
    },

    fetchSongs: async (SearchParameter) => {
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
      const newTrackList = response ?? []

      set({ songList: newTrackList })
    },

    selectSong: () => {

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
        
  }
},{
    name: 'listingStyle'
}))
