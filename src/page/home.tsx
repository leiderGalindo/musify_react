import { useEffect } from 'react'
import { BannerContet } from "../components/Content/BannerContet"
import { FilterContect } from "../components/Content/FilterContet"
import { ListSong } from "../components/Content/ListSong"
import { useSongsStore } from "../store/songs"

export const Home = () => {
  const fetchSongs    = useSongsStore(state => state.fetchSongs)
  
  useEffect(() => {
    fetchSongs('Twenty')
  }, [])

  return (
    <>
      <BannerContet />
      <FilterContect />
      <ListSong />
    </>
  )
}