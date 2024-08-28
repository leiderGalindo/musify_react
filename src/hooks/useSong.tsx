import { useSongsStore } from "../store/songs"

export const useSongs = () => {
    const songs = useSongsStore(state => state.songList)
}