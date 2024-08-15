import { useSongsStore } from '../../../store/songs'
import { Song } from '../Song'
import './index.css'

const ListSongs = [
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: 420, reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: 420, reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: 420, reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: 420, reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: 420, reproductions: '4k', likes: '2k' },
]

export const ListSong = () => {
    const listingStyle = useSongsStore(state => state.listingStyle)
    
    const classList = `containerListSongs ${(listingStyle ?? 'grid')}`
    
    return (
        <section className={classList}>
            {ListSongs.map((song, index) => {
                return <Song song={song} key={index} />
            })}
        </section>
    )
}