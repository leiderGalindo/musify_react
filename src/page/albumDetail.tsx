import { useEffect } from "react"
import { useParams } from "wouter";
import { useSongsStore } from "../store/songs";

export const AlbumDetail = () => {
  const fetchAlbumDetail = useSongsStore(state => state.fetchAlbumDetail)
  const albumDetail = useSongsStore(state => state.album)
  // const albumDetail = {}
  const params = useParams();
  const IdAlbum = (params.id ?? '')
  
  console.log(albumDetail);
  
  
  useEffect(() => {
    if(IdAlbum)
      fetchAlbumDetail(IdAlbum)
  }, [])
  
  return (
    <>
      {(typeof albumDetail.name === 'undefined') && <h1>Loading...</h1>}

      {((albumDetail.name ?? '') !== '') && <h1>sdsd</h1>}
    </>
  )
}