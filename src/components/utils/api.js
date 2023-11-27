import axios from 'axios';

// axios.default.baseURL = 'https://pixabay.com/api/';

export const fetchGallery = async (query, page = 1) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '39741011-1a4910bf2d95eb73249b8bb60';
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`
  );
  return response.data;
};
