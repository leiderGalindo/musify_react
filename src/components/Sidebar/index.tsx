import { useEffect } from "react"
import { useLocation } from "wouter"
import { Sections, SectionsMyLibrary } from "../Sections"
import { Close } from "../../icons"
import { ItemMenu } from "../ItemMenu"
import { User } from "../user"
import './index.css'

interface props {
    changeMenu: () => void
    statusMenu: string
}

export const Sidebar = ({changeMenu, statusMenu}: props) => {
    const [ location ] = useLocation()

    // Al cambiar de ubicacion oculta el menu
    useEffect(() => {
        if(statusMenu === 'menuActive')
            changeMenu()
    }, [location])

    return (
        <section className={`mainSidebar ${statusMenu}`}>
            <div className='sidebar'>
                <User />

                <div className="m-t-30 title">Menu</div>

                <div className="containerMenu">
                    {Sections.map((Section, index) => (
                        <ItemMenu 
                            icon={Section.icon} 
                            label={Section.label} 
                            to={Section.to}
                            key={index}  
                        />
                    ))}
                </div>

                <div className="m-t-30 title">My library</div>

                <div className="containerMenu">
                    {SectionsMyLibrary.map((Section, index) => (
                        <ItemMenu 
                            icon={Section.icon} 
                            label={Section.label} 
                            to={Section.to}
                            key={index}  
                        />
                    ))}
                </div>

                <div><hr /></div>

                <div className="containerMenu">
                    <div className="ItemMenu">
                        <div className="label">Mood booster</div>
                        <div className="icon">🔥</div>
                    </div>
                    <div className="ItemMenu">
                        <div className="label">Chill</div>
                        <div className="icon">🐣</div>
                    </div>
                </div>

                <button className="MenuClose" onClick={changeMenu}>
                    <Close />
                </button>
            </div>
        </section>
    )
}