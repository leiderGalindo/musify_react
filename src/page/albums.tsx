import { useEffect } from "react"
import { useSongsStore } from "../store/songs"
import { AlbumList } from "../components/Content/AlbumList"

export const Albums = () => {
  const fetchAlbums = useSongsStore(state => state.fetchAlbums)
  
  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <AlbumList/>
  )
}