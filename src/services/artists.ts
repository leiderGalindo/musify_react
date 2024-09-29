import { type Artist } from "../components/types"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
}

export const getArtists = async ({ token }:Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/artists/3YQKmKGau1PzlVlkL1iodx/related-artists`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get artist spotify')
      return await res.json()
    })
    .then(res => {
      const artists = (res.artists ?? [])
      const listArtists:Artist[] = []

      artists.map((artist:any) => {
        
        listArtists.push({
          id: artist.id,
          image: (artist.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
          name: artist.name,
          followers: artist.followers.total,
          listener: artist.popularity,
        })
      })
      
      return listArtists
    })
    .catch(error => {
      console.log('Error get artist spotify', error)
      throw new Error('Error get artist spotify')
    })
}