import { runSaga } from 'redux-saga';

import * as api from '../../api/unsplash';
import {
  loadImageStats,
  setImageStats,
  setImageStatsError,
} from '../../actions';

import { handleImageStatsLoad } from '../imageStats';

describe('handleImageStatsLoad', () => {
  it('Should load and set image stats on success', async () => {
    const dispatched = [];
    const image = { id: 'i42', downloads: 17 };

    const stats = { downloads: { total: image.downloads } };
    api.fetchImageStats = jest.fn(() => Promise.resolve(stats));

    const store = {
      dispatch: action => dispatched.push(action),
    };

    await runSaga(store, handleImageStatsLoad, image.id).toPromise();

    expect(dispatched).toContainEqual(loadImageStats(image.id));
    expect(api.fetchImageStats.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(setImageStats(image.id, image.downloads));
  });

  it('Should load and handle failure via retries', async () => {
    const dispatched = [];
    const image = { id: 'i42' };

    api.fetchImageStats = jest.fn(() => Promise.reject());

    const store = {
      dispatch: action => dispatched.push(action),
    };

    await runSaga(store, handleImageStatsLoad, image.id).toPromise();

    expect(dispatched).toContainEqual(loadImageStats(image.id));
    //expect(api.fetchImageStats.mock.calls.length).toBe(3);
    expect(dispatched).toContainEqual(setImageStatsError(image.id));
  });
});
