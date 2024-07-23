import { ChevronLeft, ChevronRight, IconSearch } from "../../../icons";
import "./index.css";

export const TopBarContect = () => {
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
            <div className="containerButtonsNavigation">
                <button onClick={() => handelClickBack()}><ChevronLeft /></button>
                <button onClick={() => handelClickNext()}><ChevronRight /></button>
            </div>
            <div className="ContainerSearch">
                <IconSearch onClick={(() => handelClickSearch() ?? '')}/>
                <input type="text" className="searchInput" placeholder="sddsd" />
            </div>
        </section>
    )
}