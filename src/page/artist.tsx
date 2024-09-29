import { useEffect } from "react";
import { useParams } from "wouter";
import { useSongsStore } from "../store/songs";
import { ArtistDetail } from "../components/Content/ArtistDetail";

export const Artist = () => {
  const fetchArtist = useSongsStore(state => state.fetchArtist)
  const artistData = useSongsStore(state => state.artist)
  const params = useParams();
  const IdArtist = (params.id ?? '')

  useEffect(() => {
    fetchArtist(IdArtist)
  }, [])
  
  console.log(artistData);
  
  return (
    <>
      {(!artistData.id) && <h1>Loading...</h1>}

      {((artistData.name ?? '') !== '') && <ArtistDetail artist={artistData} />} 
    </>
  )
}