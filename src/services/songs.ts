import { Song } from "../components/types"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
  SearchParameter: string
}

export const getSongs = async ({ token, SearchParameter }:Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/search?q=${SearchParameter}&type=track&include_external=audio`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get songs spotify')
      return await res.json()
    })
    .then(res => {
      const tracks = (res.tracks.items ?? [])
      const trackList:Song[] = []
      tracks.map((track:any) => {
        trackList.push({
          id: track.id,
          preview: (track.album.images[1].url ?? 'app_utils/imgs/songs/Cover.png'),
          name: track.name,
          artist: track.artists[0].name,
          likes: track.popularity,
          reproductions: track.popularity,
          duration: track.duration_ms,
        })
      })
      
      
      return trackList
    })
    .catch(error => {
      console.log('Error get songs spotify', error)
      throw new Error('Error get songs spotify')
    })
}