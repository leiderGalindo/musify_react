import { useEffect, useState } from "react"
import { useSongsStore } from "../store/songs"
import { SectionContent } from "../components/Content/SectionContent"
import { ItemCard } from "../components/Content/ItemCard"

export const Albums = () => {
  const domain = window.origin
  const fetchAlbums = useSongsStore(state => state.fetchAlbums)
  const AlbumList = useSongsStore(state => state.listOfAlbums)
  const [isLoading, setIsLoading] = useState((AlbumList.length === 0 || typeof AlbumList.length === 'undefined'))
  
  useEffect(() => {
    fetchAlbums()
    setIsLoading(false)
  }, [])

  return (
    <SectionContent Content={{title: 'Albums'}} IsLoading={isLoading}>
      {AlbumList.map((album, index) => {
        const Item = {
          linkDetail: `${domain}/albums/${album.id}`,
          title: album.name,
          image: album.preview,
          adicionalData: `${album.artist}`
        }
        return <ItemCard ItemData={Item} key={index} />
      })}
    </SectionContent>
  )
}