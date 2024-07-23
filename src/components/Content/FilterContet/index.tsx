import { useState } from "react"
import { IconDownload, IconGrid, IconList } from "../../../icons"
import './index.css'

export const FilterContect = () => {
    const [typeList, setTypeList] = useState('grid')
    
    const handelClickTypeList = () =>{
        const NewType = ((typeList === 'grid') ? 'list' : 'grid')
        setTypeList(NewType)
    }
    return (
        <section className="contentFilter">
            <button>
                <IconDownload />
            </button>
            <button onClick={() => handelClickTypeList()}>
                {(typeList == 'grid') ? <IconGrid /> : <IconList />}
            </button>
        
            <div className="containerSortData">
                <select name="order" id="order" className="sortData">
                    <option value="">Sort data</option>
                </select>
            </div>
        </section>
    )
}