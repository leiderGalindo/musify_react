import { IconRosetteDiscountCheck, Point } from '../../icons'
import { type Artist as ArtistType } from '../types'
import './index.css'

interface Props {
    info: ArtistType
}

export const Artist = ({ info }: Props) => {
    const ImageArtist = (info.image ?? '/app_utils/imgs/avatar.png')
    
    // Genera un color random
    const GenerateRandomCode = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }
    
    return (
        <div className="itemArtist">
            <div className='containerImage' style={{backgroundColor: GenerateRandomCode()}}>
                <img src={ImageArtist} alt={info.name} />
            </div>
            <div className='infoArtist'>
                <div className='nameArtist'>
                    {info.name}
                    <IconRosetteDiscountCheck />
                </div>
                <div className='descriptionArtist'>
                    <span>{info.followers} Followers</span>
                    <Point />
                    <span>{info.listener} Listener</span>
                </div>
            </div>
        </div>
    )
}