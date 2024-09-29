import { useEffect } from "react"
import { useSongsStore } from "../store/songs"
import { ListOfArtists } from "../components/Content/ArtistList"

export const Artists = () => {
  const fetchArtists = useSongsStore(state => state.fetchArtists)

  useEffect(() => {
    fetchArtists()
  }, [])

  return (
    <ListOfArtists/>
  )
}