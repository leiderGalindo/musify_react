import { type PodcastDetail as TypePodcastDetail, type Episode as EpisodeType } from "../../types"
import { useState } from "react";
import { useSongsStore } from "../../../store/songs";
import { Episode } from "../Episode";

interface Props {
  podcast: TypePodcastDetail
}

export const PodcastDetail = ({ podcast }: Props) => {
  const currentSong = useSongsStore(state => state.currentSong)
  const playSong = useSongsStore(state => state.playSong)
  const stopSong = useSongsStore(state => state.stopSong)
  const [ isPlaying, setIsPlaying ] = useState(false)
  
  
  const handelClickPlay = (EpisodeData: EpisodeType, index: number) => {
    const EpisodeDataPreview = EpisodeData.preview
    const EpisodeDuration  = parseInt(EpisodeData.duration)
    
    setIsPlaying(false)

    // Valida si el audio actual es el que se quiere reproducir de ser asi se detiene
    if(EpisodeDataPreview === currentSong.src && isPlaying)
      stopSong()
    else{
      const dataPlay = {
        'song': EpisodeDataPreview,
        'duration': EpisodeDuration,
        'type': 'Podcast',
        index
      }
      playSong(dataPlay)
      setIsPlaying(true)
    }
  }
    
  return (
    <>
      <div className="ContainerDetailAlbum">
        <div className="border">
          <div className="PreviewAlbum">
            <img src={podcast.image} alt={podcast.name} title={podcast.name} />
          </div>
          <div className="DetailAlbum">
            <div>Podcast</div>
            <h1 className='albumName'>{podcast.name}</h1>
          </div>
        </div>
      </div>

      <div className="containerListEpisodes list">
        {(podcast.episodes).map((episode, index) => {
          return <Episode 
            EpisodeData={episode} 
            namePodcast={podcast.name} 
            key={episode.id} 
            index={index} 
            isPlaying={isPlaying}
            clickPlay = {handelClickPlay}
          />
        })}
      </div>
    </>
  )
}