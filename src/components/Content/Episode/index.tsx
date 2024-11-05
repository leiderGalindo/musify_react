import { useState } from "react";
import { Heart, Play, Pause } from "../../../icons"
import { type Episode as EpisodeType } from "../../types"
import { useSongsStore } from "../../../store/songs";
import "./index.css";

interface Porps {
  EpisodeData: EpisodeType
  namePodcast: string
}

export const Episode = ({ EpisodeData, namePodcast }: Porps) => {
  const playSong = useSongsStore(state => state.playSong)
  const stopSong = useSongsStore(state => state.stopSong)
  const currentSong = useSongsStore(state => state.currentSong)
  const [ isPlaying, setIsPlaying ] = useState(false)
  

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

  const handelClickPlay = (EpisodeData: string) => {
    setIsPlaying(false)

    // Valida si el audio actual es el que se quiere reproducir de ser asi se detiene
    if(EpisodeData === currentSong.src && isPlaying)
      stopSong()
    else{
      playSong(EpisodeData)
      setIsPlaying(true)
    }
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
            <span className="playSong" onClick={() => handelClickPlay(EpisodeData.preview)}>
              { (currentSong.src === EpisodeData.preview && isPlaying) ? <Pause/> : <Play/> }
            </span>
          </div>
        </div>
      </article>
    </>
  )
}