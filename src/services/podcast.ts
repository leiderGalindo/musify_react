import { Episode } from "../components/types.d"

const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API

interface Props {
  token: string
  IdPodcast: string
}

export const getPodcast = async ({ token, IdPodcast = '' }: Props) => {
  if(token === '') return false
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions:RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  }

  return await fetch(`${BaseUrlApi}/shows/${IdPodcast}/episodes`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get podcast spotify')
      return await res.json()
    })
    .then(res => {
      const EpisodesResponse = (res.items ?? [])
      const Episodes:Episode[] = []
      
      EpisodesResponse.map((episode:any) => {
        Episodes.push({ 
          id: episode.id,
          image: (episode.images[0].url ?? 'app_utils/imgs/albums/Cover.png'),
          name: episode.name,
          duration: episode.duration_ms,
          release_date: episode.release_date,
          description: episode.description,
          preview: episode.audio_preview_url
        })
      })

      return Episodes
    })
    .catch(error => {
      console.log('Error get podcast spotify', error)
      throw new Error('Error get podcast spotify')
    })
}