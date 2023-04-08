import axios from 'axios';

export const fetchPhotos = (accessKey) => {
  return axios
    .get(
      `https://api.unsplash.com/photos/random?count=10&client_id=${accessKey}`
    )
    .then((response) => {
      const photos = response.data.map((photo) => ({
        id: photo.id,
        urls: photo.urls,
      }));
      return photos;
    })
    .catch((error) => {
      console.error(error);
    });
};
