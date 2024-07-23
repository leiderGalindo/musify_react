export interface Artist {
    id:         number;
    image:      string;
    name:       string;
    followers:  number;
    listener:   number;
}

export interface Song {
    preview:    string,
    name:       string,
    artis:      string,
    duration:   int,
}