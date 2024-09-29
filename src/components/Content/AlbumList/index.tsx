import { useSongsStore } from "../../../store/songs"
import { Album } from "../Album"
import './index.css'

export const AlbumList = () => {
  const AlbumList = useSongsStore(state => state.listOfAlbums)
  
  return (
    <>
      {(AlbumList.length === 0 || typeof AlbumList.length === 'undefined') && <h1>Loading...</h1>}
            
      <div style={{padding: '0 2rem'}}>
        <h1 style={{textAlign: 'left'}}>Albums</h1>
        <section className='albumListContainer grid'>
            {AlbumList.map((album, index) => {
                return <Album album={album} key={index} />
            })}
        </section>
      </div>
    </>
  )
}