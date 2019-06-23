export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
  };
}

export interface EpisodeListProps {
  episodes: Episode[];
  favorites: Episode[];
  toggleFavorite(episode: Episode): void;
}

export interface State {
  episodes: Episode[];
  favorites: Episode[];
}

export type Action =
  | {
      type: 'FETCH_DATA';
      payload: Episode[];
    }
  | { type: 'ADD_FAVORITE'; payload: Episode }
  | { type: 'REMOVE_FAVORITE'; payload: Episode };
