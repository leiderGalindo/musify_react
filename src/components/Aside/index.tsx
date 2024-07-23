import { Player } from './Player'
import { TopArtist } from './TopArtist'
import { TopBarAside } from './TopBarAside'
import './index.css'

export const Aside = () => {
    return (
        <section className="aside">
            <TopBarAside />
            <TopArtist />
            <Player />
        </section>
    )
}