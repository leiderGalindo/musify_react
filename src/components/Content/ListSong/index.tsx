import { Song } from '../Song'
import './index.css'

interface Props {
    typeList: string
}
const ListSongs = [
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: '04:20', reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: '04:20', reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: '04:20', reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: '04:20', reproductions: '4k', likes: '2k' },
    {preview: 'app_utils/imgs/songs/Cover.png', name: 'dddd', artist: 'xxx', duration: '04:20', reproductions: '4k', likes: '2k' },
]

export const ListSong = ({typeList}: Props) => {
    const classList = `containerListSongs ${typeList}`
    
    return (
        <section className={classList}>
            {ListSongs.map((song, index) => {
                return <Song song={song} key={index} />
            })}
        </section>
    )
}