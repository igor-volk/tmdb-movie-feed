export default genres => movies => movies.filter(movie => includesGenres(movie, genres));

const includesGenres = (movie, genres) => !genres || genres.every(genre => movie.genre_ids.includes(genre));
