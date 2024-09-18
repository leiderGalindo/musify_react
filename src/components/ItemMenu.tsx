import { Link } from "wouter"
interface Props {
    icon: any
    label: string
    to: string
}

export const ItemMenu = ({ icon, label, to }: Props) => {
    return(
        <Link to={to}>
            <div className="ItemMenu">
                <div className="icon">{icon}</div>
                <div className="label">{label}</div>
            </div>
        </Link>
    )
}