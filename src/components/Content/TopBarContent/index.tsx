import { ChevronLeft, ChevronRight, IconSearch, Menu } from "../../../icons";
import { useSongsStore } from "../../../store/songs";
import "./index.css";

export const TopBarContect = () => {
    const statusMenu = useSongsStore(state => state.statusMenu)
    const ChangeMenuStatus = useSongsStore(state => state.ChangeMenuStatus)
    
    // Click para ir atras
    const handelClickBack = () => {
        console.log('Back')
    }
    
    // Click para ir adelante
    const handelClickNext = () => {
        console.log('Next')
    }
    // Click para ir adelante
    const handelClickSearch = () => {
        console.log('Next')
    }
    
    return (
        <section className="containerTopBarContet">
            <button className={`MenuOpen ${statusMenu}`} onClick={() => ChangeMenuStatus()}>
                <Menu />
            </button>
            
            <div className="containerButtonsNavigation">
                <button onClick={() => handelClickBack()}><ChevronLeft /></button>
                <button onClick={() => handelClickNext()}><ChevronRight /></button>
            </div>
            <div className="ContainerSearch">
                <IconSearch />
                <input type="text" className="searchInput" placeholder="sddsd" onChange={handelClickSearch} />
            </div>
        </section>
    )
}