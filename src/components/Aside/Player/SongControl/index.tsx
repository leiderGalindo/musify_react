import { useState } from "react"
import { Song } from "../../../types";

interface Props {
    audio: Song
}

export const SongControl = ({ audio }: Props) => {
    const [ currentTime, setCurrentTime ] = useState(80)
    const duration =  audio.duration
    const FormattedDuration = '04:20'

    const handleChangeCurrentTime = ({event}) => {
        const newCurenTime = event.target.value
        setCurrentTime(newCurenTime)
    }

    return (
        <div>
            <input 
                type="range" 
                className="sliderSong" 
                min="0"
                max={duration}
                value={currentTime}
                onChange={() => handleChangeCurrentTime({event})}
            />
            <div className="d-flex justify-content-between">
                <span>00:00</span>
                <span>{FormattedDuration}</span>
            </div>
        </div>
    )
}