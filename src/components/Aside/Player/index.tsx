import { SongControl } from "./SongControl";
import { useSongsStore } from "../../../store/songs";
import "./index.css";

export const Player = () => {
  const { songInProgress } = useSongsStore((state) => state);

  // Validamos si hay alguna canción en curso de la cual
  // podamos tomar el preview de lo contrario se toma el de default
  const SongPreview = ((songInProgress.preview != "") ? 
    songInProgress.preview
    : "/app_utils/imgs/there_is_no_song.png"
  )

  return (
    <section className="containerPlayer">
      <div className="containerPreview" style={{ backgroundImage: `url(${SongPreview})` }}>
        {/* <img src={SongPreview} alt="song preview" /> */}
      </div>
      <div className="songInformation">
        <div>
          <strong className="nameSong" title={songInProgress.name}>
            {songInProgress.name ?? "Stuck space"}
          </strong>
        </div>
        <div>
          <span className="nameArtistSong">
            {songInProgress.artist ?? "Sharrak"}
          </span>
        </div>
      </div>
      <div className="player">
        <SongControl songInProgress={songInProgress} />
      </div>
    </section>
  );
};
