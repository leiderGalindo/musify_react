import { useEffect } from "react"
import { useParams } from "wouter";
import { useSongsStore } from "../store/songs";
import { AlbumDetail } from "../components/Content/AlbumDetail"

export const Album = () => {
  const fetchAlbumDetail = useSongsStore(state => state.fetchAlbumDetail)
  const albumDetail = useSongsStore(state => state.album)
  // const albumDetail = {}
  const params = useParams();
  const IdAlbum = (params.id ?? '')
  
  useEffect(() => {
    if(IdAlbum)
      fetchAlbumDetail(IdAlbum)
  }, [])
  
  return (
    <>
      {(!albumDetail.id) && <h1>Loading...</h1>}

      {((albumDetail.name ?? '') !== '') && <AlbumDetail album={albumDetail} />}
    </>
  )
}