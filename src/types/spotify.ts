export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: {
    id: string;
    name: string;
    images: {
      url: string;
    }[];
  };
  artist: string;
  songUrl: string;
}

export interface SpotifyLastPlayed {
  title: string;
  album: string;
  songUrl: string;
  artist: string;
}

export interface RecentlyPlayedResult {
  track: {
    id: string;
    name: string;
    artists: {
      id: string;
      name: string;
    }[];
    album: {
      id: string;
      name: string;
      images: {
        url: string;
      }[];
    };
    external_urls: {
      spotify: string;
    };
  };
  played_at: string;
  context: null | {
    uri: string;
    href: string;
    external_urls: {
      spotify: string;
    };
    type: string;
  };
}
