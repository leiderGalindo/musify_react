import { useEffect, useState } from "react"
import { useSongsStore } from "../store/songs"
import { ItemCard } from "../components/Content/ItemCard"
import { SectionContent } from "../components/Content/SectionContent"

export const Podcasts = () => {
  const domain = window.origin
  const fetchPodcasts = useSongsStore(state => state.fetchPodcasts)
  const listOfPodcasts = useSongsStore(state => state.listOfPodcasts)
  const [isLoading, setIsLoading] = useState((listOfPodcasts.length === 0 || typeof listOfPodcasts.length === 'undefined'))

  useEffect(() => {
    fetchPodcasts()
    setIsLoading(false)
  }, [])
  
  return (
    <>
      <SectionContent Content={{title: 'Podcast'}} IsLoading={isLoading}>
        {listOfPodcasts.map((podcast, index) => {
            const Item = {
              linkDetail: `${domain}/podcasts/${podcast.id}`,
              title: podcast.name,
              image: podcast.image,
              adicionalData: `${podcast.episodes} Episodios`
            }
            return <ItemCard ItemData={Item} key={index} />
        })}
      </SectionContent>
    </>
  )
}