import { type Artist as ArtistType } from '../types.d'
import { Artist } from "../Artist"

const Artists: ArtistType[] = [
    {id: 1, name: 'Jacob Jones', followers: 200, listener: 150, image: '/app_utils/imgs/users/user5.png'},
    {id: 2, name: 'Kathryn Murphy', followers: 200, listener: 150, image: '/app_utils/imgs/users/user6.png'},
]

export const ListOfArtist = () => {
    return (
        <div className="containerListOfArtist">
            {Artists.map((artist, index) => {
                return <Artist key={index} info={artist} />
            })}
        </div>
    )
}