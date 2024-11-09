export interface Artist {
    id:         string;
    image:      string;
    name:       string;
    followers:  number;
    listener:   number;
}
export interface ArtistDetail {
    id:         string;
    image:      string;
    name:       string;
    followers:  number;
    listener:   number;
    albums:     Album[];
}

export interface Song {
    id:             string,
    preview:        string,
    name:           string,
    artist:         string,
    likes:          string,
    reproductions:  string,
    duration:       string,
}

export interface Album {
    id:             string,
    preview:        string,
    name:           string,
    artist:         string,
    link:           string,
    release_date:   string,
}

export interface AlbumDetail {
    id:             string,
    preview:        string,
    name:           string,
    artist:         string,
    link:           string,
    release_date:   string,
    tracks:         Song[],
}

export interface Podcast {
    id:         string;
    image:      string;
    name:       string;
    episodes:   number;
}
export interface PodcastDetail {
    id:         string;
    image:      string;
    name:       string;
    episodes:   Episode[];
}

export interface Episode {
    id:             string;
    image:          string;
    name:           string;
    duration:       string;
    release_date:   string;
    description:    string;
    preview:        string;
}

export interface DetailCard {
    title:          string,
    image:          string,
    linkDetail:     string,
    adicionalData:  string
}

export interface DataPlay {
    song:       string,
    duration:   number,
    type:       string,
    index:      number,
}

export interface songInProgress {
    id:         string,
    preview:    string,
    name:       string,
    artist:     string,
    duration:   number
}