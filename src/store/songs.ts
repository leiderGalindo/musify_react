import { create } from "zustand"
import { persist } from 'zustand/middleware'

interface State {
    statusMenu: string
    listingStyle: string
    ChangeMenuStatus: () => void
    ChangeListingStyle: () => void
}

export const useSongsStore = create<State>()(persist((set, get) => {
    return {
        statusMenu: '',
        listingStyle: 'grid',

        ChangeMenuStatus: () => {
            const { statusMenu } = get()
            
            const NewMenuStatus = ((statusMenu === 'menuActive') ? '' : 'menuActive')

            set({ statusMenu: NewMenuStatus})
        },

        ChangeListingStyle: () => {
            const { listingStyle } = get()
            
            const NewListingStyle = (((listingStyle ?? '') === 'grid') ? 'list' : 'grid')
            
            sessionStorage.setItem('listingStyle', NewListingStyle);

            set({ listingStyle: NewListingStyle})
        }
        
    }
},{
    name: 'listingStyle'
}))
