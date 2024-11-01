import { type PodcastDetail as TypePodcastDetail } from "../../types"
import { Episode } from "../Episode";

interface Props {
  podcast: TypePodcastDetail
}

export const PodcastDetail = ({ podcast }: Props) => {
  console.log(podcast);
    
  return (
    <>
      <div className="ContainerDetailAlbum">
        <div className="border">
          <div className="PreviewAlbum">
            <img src={podcast.image} alt={podcast.name} title={podcast.name} />
          </div>
          <div className="DetailAlbum">
            <div>Podcast</div>
            <h1 className='albumName'>{podcast.name}</h1>
          </div>
        </div>
      </div>

      <div className="containerListSongs list">
        {(podcast.episodes).map(episode => {
          return <Episode EpisodeData={episode} namePodcast={podcast.name} key={episode.id} />
        })}
      </div>
    </>
  )
}