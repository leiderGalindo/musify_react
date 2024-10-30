import { useEffect, useState } from "react"
import { useSongsStore } from "../store/songs"
import { SectionContent } from "../components/Content/SectionContent"
import { Artist } from "../components/Content/Artist"

export const Artists = () => {
  const fetchArtists = useSongsStore(state => state.fetchArtists)
  const ListOfArtist = useSongsStore(state => state.listOfArtist)
  const [isLoading, setIsLoading] = useState((ListOfArtist.length === 0 || typeof ListOfArtist.length === 'undefined'))

  useEffect(() => {
    fetchArtists()
    setIsLoading(false)
  }, [])

  return (
    <SectionContent Content={{title: 'Artists'}} IsLoading={isLoading}>
      {ListOfArtist.map((artist, index) => {
        return <Artist artist={artist} key={index} />
      })}
    </SectionContent>
  )
}