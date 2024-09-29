import { Link } from "wouter"
import { type Artist as typeArtist } from "../../types"
import './index.css'

interface Props {
  artist: typeArtist
}

export const Artist = ({ artist }: Props) => {
  const linkDetail = `artists/${artist.id}`
  
  return (
    <Link href={linkDetail}>
      <article className="artistArticle">
        <div 
          className="imageArtistContainer"
          style={{
            backgroundImage: `url(${artist.image})`
          }}
        >
          <span className="play">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="#333" className="icon icon-tabler icons-tabler-filled icon-tabler-player-play">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            </svg>
          </span>
        </div>
        <div className="infoArtistContainer">
          <p className="nameArtist">{artist.name}</p>
          <p>Artista</p>
        </div>
      </article>
    </Link>
  )
}