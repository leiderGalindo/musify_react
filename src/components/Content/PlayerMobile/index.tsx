import { useSongsStore } from "../../../store/songs";
import { SongControl } from "../../Aside/Player/SongControl";
import "./index.css";

export const PlayerMobile = () => {
  const { songInProgress } = useSongsStore((state) => state);

  // Validamos si hay alguna canción en curso de la cual
  // podamos tomar el preview de lo contrario se toma el de default
  const SongPreview = ((songInProgress.preview != "") ? 
    songInProgress.preview
    : "/app_utils/imgs/there_is_no_song.png"
  )

  return (
    <div className="mainContainerPlayerMobile"> 
      <div className="containerPlayerMobile">
        <div className="containerPreview">
          <div className="preview" style={{ backgroundImage: `url(${SongPreview})` }}></div>
        </div>
        <div className="controlsAndName">
          <strong className="nameSong" title={songInProgress.name}>
            {songInProgress.name ?? "Stuck space"}
          </strong>
          <SongControl songInProgress={songInProgress} />
        </div>
      </div>
    </div>
  )
}