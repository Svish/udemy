import React from 'react';
import { Episode, EpisodeListProps } from './types';

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  favorites,
  toggleFavorite,
}) => {
  return (
    <>
      {episodes.map((episode: Episode) => (
        <section className="episode-box" key={episode.id}>
          <img
            src={episode.image.medium}
            alt={`Rick and Mort ${episode.name}`}
          />
          <h2>{episode.name}</h2>
          <div>
            <button type="button" onClick={() => toggleFavorite(episode)}>
              {favorites.includes(episode) ? '‒' : '+'}
            </button>
            <b>Season</b> {episode.season} <b>Number</b> {episode.number}
          </div>
        </section>
      ))}
    </>
  );
};
export default EpisodeList;
