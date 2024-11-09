import { useState } from "react"
import { songInProgress } from "../../../types";

interface Props {
    songInProgress: songInProgress
}

export const SongControl = ({ songInProgress }: Props) => {
    const [ currentTime, setCurrentTime ] = useState(80)
    const duration =  songInProgress.duration
    const FormattedDuration = '04:20'

    const handleChangeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCurenTime = event.target.value
        setCurrentTime(parseInt(newCurenTime))
    }

    return (
        <div>
            <input 
                type="range" 
                className="sliderSong" 
                min="0"
                max={duration}
                value={currentTime}
                onChange={() => handleChangeCurrentTime}
            />
            <div className="d-flex justify-content-between">
                <span>00:00</span>
                <span>{FormattedDuration}</span>
            </div>
        </div>
    )
}