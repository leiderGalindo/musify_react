import { useEffect } from 'react'
import { useSongsStore } from '../../../store/songs'
import { Song } from '../Song'
import './index.css'

export const ListSong = () => {
    const fetchSongs    = useSongsStore(state => state.fetchSongs)
    const songList      = useSongsStore(state => state.songList)
    const listingStyle  = useSongsStore(state => state.listingStyle)
    const classList     = `containerListSongs ${(listingStyle ?? 'grid')}`

    useEffect(() => {
        fetchSongs('Twenty')
    }, [])

    return (
        <>
            {(songList.length === 0 || typeof songList.length === 'undefined') && <h1>Error</h1>}
            
            <section className={classList}>
                {songList.map((song, index) => {
                    return <Song song={song} key={index} />
                })}
            </section>
        </>
    )
}