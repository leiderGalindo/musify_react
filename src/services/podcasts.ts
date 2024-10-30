import { Podcast } from "../components/types.d"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
}

export const getPodcasts = async ({ token }: Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get podcast spotify')
      return await res.json()
    })
    .then(res => {
      const podcasts = (res.shows ?? [])
      const listPodcasts:Podcast[] = []

      podcasts.map((podcast:any) => {
        listPodcasts.push({ 
          id: podcast.id,
          image: (podcast.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
          name: podcast.name,
          episodes: podcast.total_episodes
        })
      })

      return listPodcasts
    })
    .catch(error => {
      console.log('Error get podcast spotify', error)
      throw new Error('Error get podcast spotify')
    })
}