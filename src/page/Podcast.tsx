import { useParams } from "wouter";
import { useSongsStore } from "../store/songs";
import { useEffect } from "react";
import { PodcastDetail } from "../components/Content/PodcastDetail";

export const Podcast = () => {
  const fetchPodcast = useSongsStore(state => state.fetchPodcast)
  const podcastData = useSongsStore(state => state.podcast)
  const params = useParams();
  const IdPodcast = (params.id ?? '')
  
  useEffect(() => {
    fetchPodcast(IdPodcast)
  }, [])

  return (
    <>
      {(!podcastData.id) && <h1>Loading...</h1>}

      {((podcastData.name ?? '') !== '') && <PodcastDetail podcast={podcastData} />} 
    </>
  )
}