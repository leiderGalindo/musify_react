import { Heart, IconClock, IconHeadphones, Play } from "../../../icons"

interface Props {
    song: object
}
export const Song = ({ song }: Props) => {
    return (
        <article className="">
            <div>
                imagen
            </div>
            <div className="basicInformation">
                <p className="nameSong">Nombre Cancion</p>
                <p className="artisName">Artista</p>
            </div>
            <div className="moreInformation">
                <div>
                    <IconClock/> 04:19
                </div>
                <div>
                    <IconHeadphones/> 45K
                </div>
                <div>
                    <Heart/> 6K
                </div>
                <div>
                    <Play/>
                </div>
            </div>
        </article>
    )
}