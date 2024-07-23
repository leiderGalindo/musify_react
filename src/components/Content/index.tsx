import { BannerContet } from "./BannerContet"
import { FilterContect } from "./FilterContet"
import { ListSong } from "./ListSong"
import { TopBarContect } from "./TopBarContent"

export const Content = () => {
    return(
        <div className="content">
            <TopBarContect />
            <section className="mainContent">
                <BannerContet />
                <FilterContect />
                <ListSong />
            </section>
        </div>
    )
}