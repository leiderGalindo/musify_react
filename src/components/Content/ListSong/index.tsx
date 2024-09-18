import { useSongsStore } from '../../../store/songs'
import { Song } from '../Song'
import './index.css'

export const ListSong = () => {
    const songList      = useSongsStore(state => state.songList)
    const listingStyle  = useSongsStore(state => state.listingStyle)
    const classList     = `containerListSongs ${(listingStyle ?? 'grid')}`
    
    return (
        <>
            {(songList.length === 0 || typeof songList.length === 'undefined') && <h1>Loading...</h1>}
            
            <section className={classList}>
                {songList.map((song, index) => {
                    return <Song song={song} key={index} />
                })}
            </section>
        </>
    )
}