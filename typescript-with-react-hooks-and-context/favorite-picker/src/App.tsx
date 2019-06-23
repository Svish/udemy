import React, { useContext, useEffect, useCallback } from 'react';

import { Store } from './store';

import './App.css';
import { Episode, EpisodeListProps } from './types';

const EpisodeList = React.lazy(() => import('./EpisodeList'));

const URL =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

const App: React.FC = () => {
  const { state, dispatch } = useContext(Store);

  const fetchData = useCallback(async () => {
    const res = await fetch(URL);
    const json = await res.json();
    const episodes = json._embedded.episodes.filter((e: Episode) => !!e.image);
    dispatch({ type: 'FETCH_DATA', payload: episodes });
  }, [dispatch]);

  const toggleFavorite = useCallback(
    (episode: Episode) => {
      const isFavorite = state.favorites.includes(episode);
      dispatch({
        type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: episode,
      });
    },
    [state, dispatch]
  );

  const props: EpisodeListProps = {
    episodes: state.episodes,
    favorites: state.favorites,
    toggleFavorite,
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <div>
          Favorite{state.favorites.length === 1 ? '' : 's'}:{' '}
          {state.favorites.length}
        </div>
        <div>Pick your favorite episode!</div>
      </header>
      <section className="episode-layout">
        <React.Suspense fallback={'Loading...'}>
          <EpisodeList {...props} />
        </React.Suspense>
      </section>
    </>
  );
};

export default App;
