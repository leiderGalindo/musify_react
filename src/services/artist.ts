import { type Artist } from "../components/types"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
  IdArtist: string
}

export const getArtist = async ({ token, IdArtist }:Props) => {
  if(token === '' || IdArtist === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/artists/${IdArtist}`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get artist spotify')
      return await res.json()
    })
    .then(res => {
      const artist = (res ?? [])      
      const ArtistData:Artist = {
        id: artist.id,
        image: (artist.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
        name: artist.name,
        followers: artist.followers.total,
        listener: artist.popularity,
      }

      return (ArtistData ?? [])
    })
    .catch(error => {
      console.log('Error get artist spotify', error)
      throw new Error('Error get artist spotify')
    })
}