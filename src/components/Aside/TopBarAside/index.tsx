import { Bell, Crown } from "../../../icons"
import './index.css'

export const TopBarAside = () => {
    return (
        <section className="SectionTopBarAside">
            <div className="containerNotifications">
                <Bell />
                <span className="ContaienrNotifications"></span>
            </div>

            <div className="containerUpgrated">
                <button type="button" className="btnUpgratedToPremium">
                    <Crown/>
                    Upgrated to premium
                </button>
            </div>
        </section>
    )
}