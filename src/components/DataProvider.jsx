import React, { Component } from 'react';
import flowRight from 'lodash.flowright';
import { getGenres, getMovies } from '../services/movieService';
import genreFilter from '../filters/genreFilter';
import ratingFilter from '../filters/ratingFilter';
import popularitySorter from '../filters/popularitySorter';

// We're going to use a HOC pattern here to manage the state instead of Redux or other 3rd party library
// because the app is pretty simple
// and using a lib here to do so in my view would be an overkill

export default (View) => {
  return class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        genres: [],
        selectedGenres: [],
        selectedRating: 3
      }
    }

    async componentDidMount() {
      // execute the 2 requests on which the app's data model depends concurrently to make loading faster
      const [movies, genres] = await Promise.all([
        getMovies(),
        getGenres()
      ]);
      this.setState({
        movies,
        genres
      });
    }

    onGenresSelect = (values) => {
      this.setState({ selectedGenres: values });
    }

    onRateSelect = (value) => {
      this.setState({ selectedRating: value });
    }

    render () {
      const { movies, genres, selectedRating, selectedGenres } = this.state;
      // extract ids so as to decouple ReactSelect data format from filter logic
      const selectedGenreIds = selectedGenres.map(option => option.value);
      // use curry and composition to bundle all the filtering and sorting logic together into 'applyFilters' for convenience
      const applyFilters = flowRight([popularitySorter, ratingFilter(selectedRating), genreFilter(selectedGenreIds)]);
      return (
        <View
          movies={applyFilters(movies)}
          genres={genres}
          rating={selectedRating}
          onGenresSelect={this.onGenresSelect}
          onRateSelect={this.onRateSelect}
        />
      )
    }
  }
}
