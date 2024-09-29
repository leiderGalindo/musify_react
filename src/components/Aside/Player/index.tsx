import { useState } from 'react'
import { ArrowsShuffle, Pause, Play, PlayerSkipBack, PlayerSkipForward } from '../../../icons'
import { SongControl } from './SongControl'
import { Song } from '../../types' 
import './index.css'

const songInProgress:Song = {
    id:'',
    preview: '',
    name: '',
    artist: '',
    likes: '',
    reproductions: '',
    duration: '11'
}

export const Player = () => {
    const [ playing, setPlaying ] = useState(false)
    const SongPreview = ((songInProgress.preview != '') ? songInProgress.preview : '/app_utils/imgs/there_is_no_song.png')
    
    const handelChangePlaybackStatus = () => {
        setPlaying(!playing)
    }

    const handelClickSkipBack = () => {

    }

    const handelClickSkipForward = () => {
        
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
                <SongControl audio={songInProgress} />
                <div className="controls">
                    <button className='secondaryButtons'>
                        <ArrowsShuffle />
                    </button>
                    <button className='mainButtons' onClick={() => handelClickSkipBack()}>
                        <PlayerSkipBack />
                    </button>
                    <button className='mainButtons' onClick={() => handelChangePlaybackStatus()}>
                        {playing && <Pause />}
                        {!playing && <Play />}
                    </button>
                    <button className='mainButtons' onClick={() => handelClickSkipForward()}>
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