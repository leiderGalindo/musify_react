import { ArtistDetail as ArtistDetailType } from "../../../components/types"
import { Album } from "../Album"
import "./index.css"

interface Props {
    artist: ArtistDetailType
}

export const ArtistDetail = ({ artist }: Props) => {
  const followers = artist.followers.toLocaleString('es-CO')

  return (
    <>
      <div className="ContainerDetailArtist">
        <div className="border">
          <div className="PreviewArtist">
            <img src={artist.image} alt={artist.name} title={artist.name} />
          </div>
          <div className="DetailArtist">
            <div>Artista verificado</div>
            <h1 className='artistName'>{artist.name}</h1>
            <div>Seguidores: {followers}</div>
          </div>
        </div>
      </div>

      <section className='albumListContainer grid'>
        {(artist.albums).map((album, index) => {
            return <Album album={album} key={index} />
        })}
      </section>
    </>
  )
}