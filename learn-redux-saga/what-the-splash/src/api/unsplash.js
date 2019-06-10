const KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const COUNT = 3;

export const fetchImages = async page => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?page=${page}&per_page=${COUNT}&order_by=popular&client_id=${KEY}`
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);
  return data;
};

export const fetchImageStats = async id => {
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}/statistics?client_id=${KEY}`
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);
  return data;
};
