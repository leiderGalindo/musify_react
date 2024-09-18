import { Route, Switch } from "wouter"
import { TopBarContect } from "./TopBarContent"
import { Home } from "../../page/home"
import { Search } from "../../page/search"
import { Playlist } from "../../page/playlist"
import { Artist } from "../../page/artist"
import { Albums } from "../../page/albums"
import { AlbumDetail } from "../../page/albumDetail"

export const Content = () => {
    
    return(
        <div className="content">
            <TopBarContect />
            <section className="mainContent">
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/albums" component={Albums} />
                    <Route path="/albums/:id" component={AlbumDetail} />
                    <Route path="/artist" component={Artist} />
                    <Route path="/playlist" component={Playlist} />
                    <Route>404: No such page!</Route>
                </Switch>
            </section>
        </div>
    )
}