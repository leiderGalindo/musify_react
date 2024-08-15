import { Sections, SectionsMyLibrary } from "../Sections"
import { Close } from "../../icons"
import { ItemMenu } from "../ItemMenu"
import { User } from "../user"
import './index.css'
import { useSongsStore } from '../../store/songs'

export const Sidebar = () => {
    const statusMenu = useSongsStore(state => state.statusMenu)
    const ChangeMenuStatus = useSongsStore(state => state.ChangeMenuStatus)

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

                <button className="MenuClose" onClick={() => ChangeMenuStatus()}>
                    <Close />
                </button>
            </div>
        </section>
    )
}