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
  const idsPodcasts = '6SZkj9tv4CA5SC681NDn2n,6bCzqGowQUOY1LIksbiEtx,0nS4HH56YVpefoQiaESjqQ,5cyDs78xyEeLVw036if73V,7IYMsCShgqI2KIndBSRbsX,3z7kACV9G41WOljt6AVCIP,1Sdr7Jsq9HxLB3f1633for,4yufQH2A8hHtU5cwojmiwd,7f5Rdm6RukUPsWFtxlEfOb,13vA2Wu7tfIVhJ8NLFqkjx,2Ne8mQXoSobn2aKtsfhnsw,7c6XnTSL3xt7gWCqu7XYpx,4hJBES3FWvMrFipF6cwQhA,1wLL6EYoLRyA8Tpgro5wnE,23xWdo0Uo3pvCyldp4ve4I,5cCRh6i1FDIGU9Xyvcl1Lp,4G8dqwAqwGeokzkmmMcVll,1MJw0ErXqIjeSitlaSNBmW,7I0E0dWqLAVF0LGkJ3vFjU'

  return await fetch(`${BaseUrlApi}/shows?ids=${idsPodcasts}`, requestOptions)
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