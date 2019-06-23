import React, { useReducer } from 'react';
import { State, Action } from './types';

const initialState: State = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<State | any>(initialState);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };

    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          episode => episode !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
