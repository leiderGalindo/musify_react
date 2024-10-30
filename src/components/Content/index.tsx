import { Route, Switch } from "wouter"
import { TopBarContect } from "./TopBarContent"
import { Home } from "../../page/home"
import { Search } from "../../page/search"
import { Podcasts } from "../../page/podcasts"
import { Artists } from "../../page/artists"
import { Artist } from "../../page/artist"
import { Albums } from "../../page/albums"
import { Album } from "../../page/album"
import { Podcast } from "../../page/Podcast"

export const Content = () => {
    
	return(
		<div className="content">
			<TopBarContect />
			<section className="mainContent">
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/search" component={Search} />
					<Route path="/albums" component={Albums} />
					<Route path="/albums/:id" component={Album} />
					<Route path="/artists" component={Artists} />
					<Route path="/artists/:id" component={Artist} />
					<Route path="/podcasts" component={Podcasts} />
					<Route path="/podcasts/:id" component={Podcast} />
					
					<Route>404: No such page!</Route>
				</Switch>
			</section>
		</div>
	)
}