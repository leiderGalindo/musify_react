import { useEffect, useState } from "react";
import { Heart, Play, Pause } from "../../../icons"
import { type Episode as EpisodeType } from "../../types"
import { useSongsStore } from "../../../store/songs";
import "./index.css";

interface Porps {
  EpisodeData: EpisodeType
  namePodcast: string
  index: number
}

export const Episode = ({ EpisodeData, namePodcast, index }: Porps) => {
  const playSong = useSongsStore(state => state.playSong)
  const stopSong = useSongsStore(state => state.stopSong)
  const nextSong = useSongsStore(state => state.nextSong)
  const currentSong = useSongsStore(state => state.currentSong)
  const [ isPlaying, setIsPlaying ] = useState(false)

  useEffect(() => {
    console.log('currentSong', currentSong);
    
  }, [currentSong])
  

  // Formatear milisegundos a minutos y segundos (801201 = 13 min 21 segundos) 
  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60
    return `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} segundos`
  }

  // Formatear fecha
  const formatDate = (unformattedDate: string) => {
    const date = new Date(unformattedDate)
    return date.toLocaleDateString("es-ES", { year: 'numeric', month: 'long' });
  }

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

    setTimeout(() => {
      nextSong()
    }, EpisodeDuration)
  }

  return (
    <>
      <article className='itemSong itemSongEpisode'>
        <div className="containerImg">
          <img src={EpisodeData.image} alt={EpisodeData.name} title={EpisodeData.name} /> 
        </div>
        <div className="basicEpisodeInformation"> 
          <p className="nameEpisode">{EpisodeData.name}</p>
          <p>{namePodcast}</p>
          <p className="descriptionEpisode">{(EpisodeData.description).slice(0, 300)}</p>
          <p className="hiddenXs">
            {formatDate(EpisodeData.release_date)}
            <span className="punto"> • </span>
            {formatTime(parseInt(EpisodeData.duration))}
          </p>
          <div className="episodeActions">
            <span className="heartOfSong">
              <Heart/>
            </span>
            <span 
              className="playSong" 
              id={`play_episode_${index}`}
              onClick={() => handelClickPlay(EpisodeData, index)}
            >
              { (currentSong.src === EpisodeData.preview && isPlaying) ? <Pause/> : <Play/> }
            </span>
          </div>
        </div>
      </article>
    </>
  )
}