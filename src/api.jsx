import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'b04567fcf9c5c71297b26528eddc4422';

// const perPage = 12;

export const fetchTrandingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data;
};
