import { IconDownload, IconGrid, IconList } from "../../../icons"
import { useSongsStore } from "../../../store/songs"
import './index.css'

export const FilterContect = () => {
    const listingStyle = useSongsStore(state => state.listingStyle)
    const ChangeListingStyle = useSongsStore(state => state.ChangeListingStyle)
    
    return (
        <section className="contentFilter">
            <button>
                <IconDownload />
            </button>
            <button onClick={() => ChangeListingStyle()}>
                {(listingStyle == 'grid') ? <IconGrid /> : <IconList />}
            </button>
        
            <div className="containerSortData">
                <select name="order" id="order" className="sortData">
                    <option value="">Sort data</option>
                </select>
            </div>
        </section>
    )
}