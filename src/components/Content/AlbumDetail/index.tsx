import { type AlbumDetail as Detail } from '../../types'
import { Song } from '../Song'
import './index.css'

interface props {
  album: Detail
}

export const AlbumDetail = ({ album }: props) => {
  const ReleaseDate = new Date(album.release_date).toLocaleDateString('es-CO', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
  
  return (
    <>
      <div className="ContainerDetailAlbum">
        <div className="border">
          <div className="PreviewAlbum">
            <img src={album.preview} alt={album.name} title={album.name} />
          </div>
          <div className="DetailAlbum">
            <div>Playlist pública</div>
            <h1 className='albumName'>{album.name}</h1>
            <div>Artista: {album.artist}</div>
            <div>Fecha de publicación: {ReleaseDate}</div>
          </div>
        </div>
      </div>

      <div className="containerListSongs list">
        {(album.tracks).map((song, index) => {
            return <Song song={song} key={index} />
        })}
      </div>
    </>
  )
}