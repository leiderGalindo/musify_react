import { type Episode as EpisodeType } from "../../types"
import { useState } from "react";
import { formatDate, formatTime } from "../../../utils/utils";
import { Heart, Play, Pause } from "../../../icons"
import { useSongsStore } from "../../../store/songs";
import "./index.css";

interface Porps {
  EpisodeData: EpisodeType
  namePodcast: string
  isPlaying: boolean
  index: number
  clickPlay: (EpisodeData: EpisodeType, index: number) => void
}

export const Episode = ({ EpisodeData, namePodcast, index, clickPlay, isPlaying }: Porps) => {
  const currentSong = useSongsStore(state => state.currentSong)
  
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
              onClick={() => clickPlay(EpisodeData, index)}
            >
              { (currentSong.src === EpisodeData.preview && isPlaying) ? <Pause/> : <Play/> }
            </span>
          </div>
        </div>
      </article>
    </>
  )
}