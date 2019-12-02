export default rating => movies => movies.filter(movie => movie.vote_average >= rating);

