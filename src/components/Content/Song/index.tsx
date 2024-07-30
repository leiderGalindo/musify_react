import { Heart, IconClock, IconHeadphones, Play } from "../../../icons"
import { Song as typeSong } from "../../types.d"
import './index.css'
interface Props {
    song: typeSong
}

export const Song = ({ song }: Props) => {
    return (
        <article className='itemSong'>
            <div className="containerImg">
                <img src={song.preview} alt={song.name} title={song.name} />
            </div>
            <div className="basicInformation">
                <p className="nameSong">{song.name}</p>
                <p className="artisName">{song.artist}</p>
            </div>
            <div className="moreInformation">
                <div className="hiddenXs">
                    <IconClock/>{song.duration}
                </div>
                <div className="hiddenXs">
                    <IconHeadphones/>{song.reproductions}
                </div>
                <div className="hiddenXs">
                    <span className="heartOfSong">
                        <Heart/>{song.likes}
                    </span>
                </div>
                <div>
                    <span className="playSong">
                        <Play/>
                    </span>
                </div>
            </div>
        </article>
    )
}