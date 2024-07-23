import { ListOfArtist } from '../../ListOfArtist'
import './index.css'

export const TopArtist = () => {
    return (
        <section className="sectionTopArtist">
            {/* section title */}
            <div className='containerTitleTopArtist'>
                <h3>Top Artist</h3>
                <a href="">View All</a>
            </div>

            {/* list of top artist */}
            <ListOfArtist/>
        </section>
    )
}