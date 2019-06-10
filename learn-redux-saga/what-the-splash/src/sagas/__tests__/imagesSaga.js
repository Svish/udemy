import { runSaga } from 'redux-saga';

import * as api from '../../api/unsplash';
import { setImages, setImagesError } from '../../actions';

import { getPage, handleImagesLoad } from '../images';

describe('getPage', () => {
  it('Selector gives back the page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const result = getPage(state);
    expect(result).toBe(nextPage);
  });
});

describe('handleImagesLoad', () => {
  it('Should load images and handle success', async () => {
    const dispatched = [];

    const mockedImages = ['abc', 'def'];
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

    const store = {
      getState: () => ({ nextPage: 1 }),
      dispatch: action => dispatched.push(action),
    };

    await runSaga(store, handleImagesLoad).toPromise();

    expect(api.fetchImages.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(setImages(mockedImages));
  });

  it('Should load images and handle failure', async () => {
    const dispatched = [];

    const error = 'Failed';
    api.fetchImages = jest.fn(() => Promise.reject(error));

    const store = {
      getState: () => ({ nextPage: 1 }),
      dispatch: action => dispatched.push(action),
    };

    await runSaga(store, handleImagesLoad).toPromise();

    expect(api.fetchImages.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(setImagesError(error));
  });
});
