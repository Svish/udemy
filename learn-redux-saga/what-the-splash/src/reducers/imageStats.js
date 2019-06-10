import {
  STATS_LOAD,
  STATS_LOAD_SUCCESS,
  STATS_LOAD_FAIL,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case STATS_LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          downloads: null,
          error: false,
        },
      };

    case STATS_LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: action.downloads,
          error: false,
        },
      };

    case STATS_LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: null,
          error: true,
        },
      };

    default:
      return state;
  }
};
