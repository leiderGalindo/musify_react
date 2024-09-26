import { AlbumDetail, type Song } from "../components/types"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
  Id: string
}

export const getAlbum = async ({ token, Id }:Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/albums/${Id}`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get album spotify')
      return await res.json()
    })
    .then(res => {
      const responseData = (res ?? [])
      // console.log(responseData);
      
      const trackList:Song[] = [];
      (responseData.tracks.items ?? []).map((track:any) => {        
        const duration = ((track.duration_ms / 60000).toFixed(2)).replace('.', ':')
        trackList.push({
          id: track.id,
          preview: (responseData.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
          name: track.name,
          artist: track.artists[0].name,
          likes: '99',
          reproductions: '99',
          duration: duration,
        })
      })

      // Seteamos la data de la respuesta en la info del album consultado
      const album:AlbumDetail = {
        id: responseData.id,
        preview: (responseData.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
        name: responseData.name,
        artist: responseData.artists[0].name,
        link: responseData.href,
        release_date: responseData.release_date,
        tracks: trackList,
      }
      
      return album
    })
    .catch(error => {
      console.log('Error get album spotify', error)
      throw new Error('Error get album spotify')
    })
}