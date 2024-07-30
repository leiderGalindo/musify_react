import { IconDownload, IconGrid, IconList } from "../../../icons"
import './index.css'

interface Props {
    typeList: string
    onChangeStyleList: (typeList: string) => void
}

export const FilterContect = ({ typeList, onChangeStyleList }: Props) => {
    
    const handelClickTypeList = () =>{
        console.log(typeList);
        const NewType = ((typeList === 'grid') ? 'list' : 'grid')
        console.log(NewType);
        onChangeStyleList(NewType)
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