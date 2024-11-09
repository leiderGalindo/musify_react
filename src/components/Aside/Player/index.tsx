import { useState } from 'react'
import { ArrowsShuffle, Pause, Play, PlayerSkipBack, PlayerSkipForward } from '../../../icons'
import { SongControl } from './SongControl'
import { useSongsStore } from '../../../store/songs'
import './index.css'

export const Player = () => {
    const { isPlaying, songInProgress } = useSongsStore(state => state)
    const stopSong = useSongsStore(state => state.stopSong)
    const nextSong = useSongsStore(state => state.nextSong)
    const previousSong = useSongsStore(state => state.previousSong)
    const [ playing, setPlaying ] = useState(isPlaying)
    const SongPreview = ((songInProgress.preview != '') ? songInProgress.preview : '/app_utils/imgs/there_is_no_song.png')
    
    const handelChangePlaybackStatus = () => {
        setPlaying(!playing)

        if(isPlaying)
            stopSong()
    }

    return (
        <section className='containerPlayer'>
            <div className='containerPreview'>
                <img src={SongPreview} alt="song preview" />
            </div>
            <div className='songInformation'>
                <div>
                    <strong className='nameSong'>Stuck space</strong>
                </div>
                <div>
                    <span className='nameArtistSong'>Sharrak </span>
                </div>
            </div>
            <div className='player'>
                <SongControl songInProgress={songInProgress} />
                <div className="controls">
                    <button className='secondaryButtons'>
                        <ArrowsShuffle />
                    </button>
                    <button className='mainButtons' onClick={() => previousSong()}>
                        <PlayerSkipBack />
                    </button>
                    <button className='mainButtons' onClick={() => handelChangePlaybackStatus()}>
                        {playing && <Pause />}
                        {!playing && <Play />}
                    </button>
                    <button className='mainButtons' onClick={() => nextSong()}>
                        <PlayerSkipForward />
                    </button>
                    <button className='secondaryButtons'>
                        <ArrowsShuffle />
                    </button>
                </div>
            </div>
        </section>
    )
}