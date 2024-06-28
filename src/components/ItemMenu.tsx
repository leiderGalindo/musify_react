
interface Props {
    icon: any
    label: string
}

export const ItemMenu = ({ icon, label }: Props) => {
    return(
        <div className="ItemMenu">
            <div className="icon">{icon}</div>
            <div className="label">{label}</div>
        </div>
    )
}