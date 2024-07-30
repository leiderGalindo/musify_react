import { useState } from "react"
import { BannerContet } from "./BannerContet"
import { FilterContect } from "./FilterContet"
import { ListSong } from "./ListSong"
import { TopBarContect } from "./TopBarContent"

export const Content = () => {
    // list | grid
    const [ typeList, setTypeList ] = useState('grid')
    console.log(typeList);
    

    return(
        <div className="content">
            <TopBarContect />
            <section className="mainContent">
                <BannerContet />
                <FilterContect typeList={typeList} onChangeStyleList={setTypeList}/>
                <ListSong typeList={typeList} />
            </section>
        </div>
    )
}