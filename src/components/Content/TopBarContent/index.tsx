import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useLocation } from "wouter";
import { ChevronLeft, ChevronRight, IconSearch, Menu } from "../../../icons";
import { useSongsStore } from "../../../store/songs";
import "./index.css";

interface props {
	changeMenu: () => void
	statusMenu: string
}

export const TopBarContect = ({ changeMenu, statusMenu }: props) => {
    // const statusMenu = useSongsStore(state => state.statusMenu)
    // const changeMenu = useSongsStore(state => state.changeMenu)
    const fetchSongs    = useSongsStore(state => state.fetchSongs)
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ location, setLocation  ] = useLocation()
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    // Realiza la busqueda
    useEffect(() => {
        if(debouncedSearchTerm){
            fetchSongs(searchTerm)
        }
    }, [debouncedSearchTerm])

    // Click para ir atras
    const handelClickBack = () => {
        history.back()
    }
    
    // Click para ir adelante
    const handelClickNext = () => {
        history.go(1)
    }

    // Click para ir adelante
    const handelClickSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Valida si la ubicacion actual es la pagina se search de no ser asi setea dicha ubicacion
        if(location != '/search') 
            setLocation('/search')
            
        setSearchTerm(event.target.value)
    }
    
    return (
        <section className="containerTopBarContet">
            <button className={`MenuOpen ${statusMenu}`} onClick={changeMenu}>
                <Menu />
            </button>
            
            <div className="containerButtonsNavigation">
                <button onClick={() => handelClickBack()}><ChevronLeft /></button>
                <button onClick={() => handelClickNext()}><ChevronRight /></button>
            </div>
            <div className="ContainerSearch">
                <IconSearch />
                <input 
                    type="text" 
                    className="searchInput" 
                    placeholder="¿Que quieres reproducir?" 
                    value={searchTerm}
                    onChange={handelClickSearch}
                />
            </div>
        </section>
    )
}