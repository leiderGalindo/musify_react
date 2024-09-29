import { useSongsStore } from "../../../store/songs"
import { Artist } from "../Artist"
import './index.css'

export const ListOfArtists = () => {
  const ListOfArtist = useSongsStore(state => state.listOfArtist)
  console.log(ListOfArtist);
  
  
  return (
    <>
      {(ListOfArtist.length === 0 || typeof ListOfArtist.length === 'undefined') && <h1>Loading...</h1>}
            
      <div style={{padding: '0 2rem'}}>
        <h1 style={{textAlign: 'left'}}>Artists</h1>
        <section className='artistListContainer'>
          {ListOfArtist.map((artist, index) => {
            return <Artist artist={artist} key={index} />
          })}
        </section>
      </div>
    </>
  )
}