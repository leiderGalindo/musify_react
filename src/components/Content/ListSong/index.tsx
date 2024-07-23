import { Song } from '../Song'
import './index.css'

const ListSongs = [
    {label: 'dddd', image: 'sdsdsd'},
    {label: 'dddd', image: 'sdsdsd'},
    {label: 'dddd', image: 'sdsdsd'},
    {label: 'dddd', image: 'sdsdsd'},
    {label: 'dddd', image: 'sdsdsd'},
]
export const ListSong = () => {
    return (
        <section className="containerListSongs">
            {ListSongs.map((index, song) => {
                return <Song song={song} key={index} />
            })}
        </section>
    )
}