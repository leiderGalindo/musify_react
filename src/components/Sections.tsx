import { 
    Home, 
    Albums, 
    Artis, 
    Microphone, 
    History,
    Heart,
    Plus 
} from '../icons'

export const Sections = [
    {icon: <Home />, label: 'Home', to: '/'},
    {icon: <Albums />, label: 'Albums', to: '/albums'},
    {icon: <Artis />, label: 'Artist', to: '/artists'},
    {icon: <Microphone />, label: 'Podcasts', to: '/playlist'},
]

export const SectionsMyLibrary = [
    {icon: <History />, label: 'Recently Played', to: ''},
    {icon: <Heart />, label: 'Liked Songs', to: ''},
    {icon: <Plus />, label: 'Create Playlist', to: ''},
]