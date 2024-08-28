import Flicking, { ViewportSlot } from "@egjs/react-flicking";
// import { AutoPlay } from "@egjs/flicking-plugins"
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "./index.css";


const Banners = [
    '5820202.jpg',
    '5820202.jpg',
    '5820202.jpg',
]
export const BannerContet = () => {
    const plugins = [new Arrow()];
    
    return (
        <section className="containerBanner">
              <Flicking
                circular={true}
                plugins={plugins}
            >
                {
                    Banners.map((Banner, index) => {
                        return (
                            <div 
                                style={{ backgroundImage: `url(/app_utils/imgs/banners/${Banner})` }}
                                className="imgsBanner" 
                                key={index}
                            />
                        )
                    })
                }
                <ViewportSlot>
                    <span className="flicking-arrow-prev is-thin"></span>
                    <span className="flicking-arrow-next is-thin"></span>
                </ViewportSlot>
            </Flicking>
        </section>
    )
}