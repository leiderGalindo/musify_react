import { useState } from "react"
import {
    ArrowsShuffle,
    Pause,
    Play,
    PlayerSkipBack,
    PlayerSkipForward,
} from "../../../../icons";
import { songInProgress } from "../../../types";
import { useSongsStore } from "../../../../store/songs";

interface Props {
    songInProgress: songInProgress
}

export const SongControl = ({ songInProgress }: Props) => {
    const { isPlaying, currentSong } = useSongsStore((state) => state);
    const stopSong = useSongsStore((state) => state.stopSong);
    const nextSong = useSongsStore((state) => state.nextSong);
    const previousSong = useSongsStore((state) => state.previousSong);
    const [playing, setPlaying] = useState(isPlaying);
    const [ currentTime, setCurrentTime ] = useState(0)
    const duration = (songInProgress.duration ?? 0)
    const [ end, setEnd ] = useState(duration)
    
    // Formatear milisegundos a minutos y segundos (801201 = 13 min 21 segundos) 
    const formatTime = (time: number): string => {
        const totalSeconds = Math.floor(time / 1000);        
        const seconds = totalSeconds % 60
        let minutes = Math.floor(totalSeconds / 60);
        minutes = (minutes > 1) ? 1 : minutes;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    // Cambia el tiempo actual del slider
    /*
        const handleChangeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newCurenTime = event.target.value
            setCurrentTime(parseInt(newCurenTime))
        }
    */

    // Reproduce o pausa la canción
    const handelChangePlaybackStatus = () => {
        setPlaying(!playing);

        if (isPlaying) stopSong();
    };

    const handleTimeUpdate = (): void => {
        const newCurenTime = currentSong.currentTime * 1000
        
        setCurrentTime(newCurenTime)
    };

    currentSong.ontimeupdate = handleTimeUpdate;

    // Actualiza el valor del tiempo de finalizacion de 
    // la reproducción actual al momento que carga la cancion
    currentSong.onloadedmetadata = () => {
        const newEnd = currentSong.duration * 1000
        setEnd(newEnd)
    }

    console.log(currentTime);

    return (
        <div>
            <input 
                type="range" 
                id={`songRangeInput`}
                min='0'
                max={end}
                className="sliderSong" 
                value={currentTime}
                disabled
            />
            <div className="d-flex justify-content-between noMobile">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(end)}</span>
            </div>
            <div className="controls">
                <button className="secondaryButtons noMobile">
                    <ArrowsShuffle />
                </button>
                <button className="mainButtons" onClick={() => previousSong()}>
                    <PlayerSkipBack />
                </button>
                <button
                    className="mainButtons"
                    onClick={() => handelChangePlaybackStatus()}
                >
                    {playing && <Pause />}
                    {!playing && <Play />}
                </button>
                <button className="mainButtons" onClick={() => nextSong()}>
                    <PlayerSkipForward />
                </button>
                <button className="secondaryButtons noMobile">
                    <ArrowsShuffle />
                </button>
            </div>
        </div>
    )
}