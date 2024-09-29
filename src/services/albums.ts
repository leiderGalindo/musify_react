import { Album } from "../components/types"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
  IdArtist: string|boolean
}

export const getAlbums = async ({ token, IdArtist = false }:Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  let url = ''
  if(IdArtist)
    url = `${BaseUrlApi}/artists/${IdArtist}/albums`
  else
    url = `${BaseUrlApi}/browse/new-releases?limit=20`

  return await fetch(url, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get albums spotify')
      return await res.json()
    })
    .then(res => {
      let albums = []
      if(IdArtist)
        albums = (res.items ?? []) 
      else
        albums = (res.albums.items ?? []) 
      
      const listAlbums:Album[] = []

      albums.map((album:any) => {
        listAlbums.push({
          id: album.id,
          preview: (album.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
          name: album.name,
          artist: album.artists[0].name,
          link: album.href,
          release_date: album.release_date,
        })
      })
      
      return listAlbums
    })
    .catch(error => {
      console.log('Error get albums spotify', error)
      throw new Error('Error get albums spotify')
    })
}