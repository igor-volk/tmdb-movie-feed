import axios from 'axios';

const api_key = 'a72d8527794893f7001e80474f4e7811';

export const getMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);

    return response.data.results;
  } catch (error) {
    console.log("Error fetching movies: ", error.message);
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US&page=1`);

    return response.data.genres;
  } catch (error) {
    console.log("Error fetching genres: ", error.message);
  }
};
