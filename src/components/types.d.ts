export interface Artist {
    id:         number;
    image:      string;
    name:       string;
    followers:  number;
    listener:   number;
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