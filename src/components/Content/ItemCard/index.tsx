import { Link } from "wouter"
import { type DetailCard } from "../../types"
import './index.css'

interface Props {
  ItemData: DetailCard
}

export const ItemCard = ({ ItemData }:Props) => {
  const {
    linkDetail,
    title,
    image,
    adicionalData
  } = ItemData
  
  return (
    <Link href={linkDetail}>
      <article className='itemCard'>
        <div className="containerImg">
            <img src={image} alt={title} title={title} />
        </div>
        <div className="basicInformation">
            <p className="titleCard">{title}</p>
            <p className="adicionalDataCard">{adicionalData}</p>
        </div>
      </article>
    </Link>
  )
}