import { 
    type Song, 
    type Album, 
    type AlbumDetail, 
    type Artist, 
    type ArtistDetail, 
    type Podcast, 
    type PodcastDetail,
    type DataPlay,
    type songInProgress
} from "../components/types"
import { create } from "zustand"
import { persist } from 'zustand/middleware'
import { getToken } from "../services/token"
import { getSongs } from "../services/songs"
import { getAlbums } from "../services/albums"
import { getAlbum } from "../services/album"
import { getArtists } from "../services/artists"
import { getArtist } from "../services/artist"
import { getPodcasts } from "../services/podcasts"
import { getPodcast } from "../services/podcast"

const initialValueAlbum = {
  id: '',
  preview: '',
  name: '',
  artist: '',
  link: '',
  release_date: '',
  tracks: []
}

const initialValueArtist = {
  id: '',
  image: '',
  name: '',
  followers: 0,
  listener: 0,
  albums: []
}

const initialValuePodcast = {
  id: '',
  image: '',
  name: '',
  followers: 0,
  listener: 0,
  episodes: []
}

const initialValueSong = {
  id: '',
  preview: '',
  name: '',
  artist: '',
  duration: 0,
  song: '',
}

interface State {
  songList: Song[]
  listOfAlbums: Album[]
  listOfArtist: Artist[]
  listOfPodcasts: Podcast[]
  album: AlbumDetail
  artist: ArtistDetail
  podcast: PodcastDetail
  currentSong: HTMLAudioElement
  songInProgress: songInProgress
  currentIndex: number
  currentType: string
  isPlaying: boolean
  // statusMenu: string
  token: string
  listingStyle: string
  tokenExpiresIn: number
  getToken: () => void
  fetchSongs: (SearchParameter: string) => void
  fetchAlbums: () => void
  fetchAlbumDetail: (Id: string) => void
  fetchArtists: () => void
  fetchArtist: (Id: string) => void
  fetchPodcasts: () => void
  fetchPodcast: (Id: string) => void
  selectSong: (songId: string) => void
  // ChangeMenuStatus: () => void
  ChangeListingStyle: () => void
  playSong: (dataPlay: DataPlay) => void
  stopSong: () => void
  nextSong: () => void
  previousSong: () => void
}

export const useSongsStore = create<State>()(persist((set, get) => ({
  songList: [],
  listOfAlbums: [],
  listOfArtist: [],
  listOfPodcasts: [],
  album: initialValueAlbum,
  artist: initialValueArtist,
  podcast: initialValuePodcast,
  songInProgress: initialValueSong,
  currentSong: new Audio(),
  currentIndex: 0,
  currentType: '',
  isPlaying: false,
  // statusMenu: '',
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

    const IdArtist = false
    const response = await getAlbums({ token, IdArtist })
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

  fetchArtists: async () => {
    const { token } = get()
    const { tokenExpiresIn } = get()
    const { getToken } = get()    

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken()
    }

    const response = await getArtists({ token })
    const newListOfArtist = (response ?? [])
    
    if(newListOfArtist)
      set({ listOfArtist: newListOfArtist })
  },

  fetchArtist: async (IdArtist: string) => {
    set({ artist: initialValueArtist })
    const { token } = get()
    const { tokenExpiresIn } = get()
    const { getToken } = get()

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken()
    }

    const response = await getArtist({ token, IdArtist })
    const artist = (response ?? [])

    if(artist){
      const albums = await getAlbums({ token, IdArtist })
      // Valida si existen albums
      if(!albums) return false

      const newArtist:ArtistDetail = {
        ...artist,
        albums: albums
      }
      
      if(newArtist)
        set({ artist: newArtist })
    }
  },

  fetchPodcasts: async () => {
    const { token, tokenExpiresIn, getToken } = get()

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken()
    }

    const response = await getPodcasts({ token })
    const newListOfPodcasts = (response ?? [])
    console.log(newListOfPodcasts);
            
    if(newListOfPodcasts)
      set({ listOfPodcasts: newListOfPodcasts })
  },

  fetchPodcast: async (IdPodcast: string) => {
    set({ podcast: initialValuePodcast })
    const { token, tokenExpiresIn, getToken, listOfPodcasts } = get()
    const selectedPodcasts = listOfPodcasts.filter(podcast => podcast.id === IdPodcast)    

    // Valida si el token ya fue obtenido o si ya expiro de no ser asi lo obtiene
    if(token === '' || 
      (tokenExpiresIn < new Date().getTime())
    ){
      await getToken()
    }

    if(selectedPodcasts){
      const response = await getPodcast({ token, IdPodcast })
      const episodeslist = (response ?? [])
      
      // Valida si existen albums
      if(!episodeslist) return false

      const newDetailPodcasts:PodcastDetail = {
        id: selectedPodcasts[0].id,
        image: selectedPodcasts[0].image,
        name: selectedPodcasts[0].name,
        episodes: episodeslist
      }
      
      if(newDetailPodcasts)
        set({ podcast: newDetailPodcasts })
    }
  },

  selectSong: (songId: string) => {
    console.log(songId);
    
  },

  playSong: (dataPlay: DataPlay) => {
    const { stopSong, nextSong, currentSong } = get()
    const { song, duration, type, index } = dataPlay

    // Para evitar que se repita el audio
    if(currentSong) stopSong()
    
    const audio = new Audio(song)
    audio.controls = true
    audio.play()

    // Al terminar la canción se pasa a la siguiente
    audio.onended = () => {
      nextSong()
    }

    switch (type) { 
      case 'Podcast':
        const { podcast } = get()
        
        const newSongInProgress = {
          id: podcast.episodes[index].id,
          preview: podcast.image,
          name: podcast.episodes[index].name,
          artist: 'podcast.episodes[index].',
          duration: duration,
          song: song
        }

        set({ songInProgress: newSongInProgress})
      break;
    }

    set({
      currentSong: audio, 
      isPlaying: true,
      currentType: type,
      currentIndex: index
    })
  },

  stopSong: () => {
    const { currentSong } = get()
    
    
    if((currentSong.currentTime ?? 0) > 0){
      currentSong.pause()

      set({ isPlaying: false })
    }
  },

  nextSong: () => {
    const { currentIndex, currentType } = get()
    const { stopSong, playSong } = get()
    let newCurrentSong = {} as DataPlay

    stopSong()
    const newCurrentIndex = currentIndex + 1

    switch (currentType) {
      case 'Podcast':
        const { podcast } = get()
        const episode = podcast.episodes[newCurrentIndex]
        
        if(!episode) return false

        newCurrentSong = {
          'song': episode.preview,
          'duration': parseInt(episode.duration),
          'index': newCurrentIndex,
          'type': 'Podcast'
        }
      break
      
    }
    
    if(newCurrentSong) playSong(newCurrentSong)
    set({ currentIndex: newCurrentIndex })
  },

  previousSong: () => {
    const { currentIndex, currentType } = get()
    const { stopSong, playSong } = get()
    let newCurrentSong = {} as DataPlay

    stopSong()
    const newCurrentIndex = currentIndex - 1
    set({ currentIndex: newCurrentIndex })

    switch (currentType) {
      case 'Podcast':
        const { podcast } = get()
        const episode = podcast.episodes[newCurrentIndex]
        newCurrentSong = {
          'song': episode.preview,
          'duration': parseInt(episode.duration),
          'index': newCurrentIndex,
          'type': 'Podcast'
        }
        console.log(newCurrentSong);  
      break;
    }
    
    if(newCurrentSong.song ?? false) playSong(newCurrentSong)
  },

  // ChangeMenuStatus: () => {
  //   const { statusMenu } = get()      
  //   const NewMenuStatus = ((statusMenu === 'menuActive') ? '' : 'menuActive')

  //   set({ statusMenu: NewMenuStatus })
  // },

  ChangeListingStyle: () => {
    const { listingStyle } = get()
    
    const NewListingStyle = (((listingStyle ?? '') === 'grid') ? 'list' : 'grid')
    
    sessionStorage.setItem('listingStyle', NewListingStyle);

    set({ listingStyle: NewListingStyle})
  }

}),{
    name: 'listingStyle'
}))
