import { Album } from "../components/types"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
}

export const getAlbums = async ({ token }:Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/browse/new-releases?limit=20`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get albums spotify')
      return await res.json()
    })
    .then(res => {
      const albums = (res.albums.items ?? [])
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