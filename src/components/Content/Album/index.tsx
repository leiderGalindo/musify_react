import { Link } from "wouter"
import { type Album as typeAlbum } from "../../types"
import './index.css'

interface Props {
  album: typeAlbum
}

export const Album = ({ album }:Props) => {
  const linkDetail = `http://localhost:5173/albums/${album.id}`
  
  return (
    <Link href={linkDetail}>
      <article className='itemAlbum'>
        <div className="containerImg">
            <img src={album.preview} alt={album.name} title={album.name} />
        </div>
        <div className="basicInformation">
            <p className="album">{album.name}</p>
            <p className="artisName">{album.artist}</p>
        </div>
      </article>
    </Link>
  )
}