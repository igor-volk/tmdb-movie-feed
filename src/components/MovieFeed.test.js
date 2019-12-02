import React from 'react';
import { shallow } from 'enzyme';
import { MovieFeed } from "./MovieFeed";

describe("Movie Feed", () => {
  let wrapper;
  const movies = [
    {
      title: "Jaws",
      poster_path: "/jaws_poster.jpg",
      genre_ids: [1,5,9],
      vote_average: 7
    },
    {
      title: "Love story",
      poster_path: "/love_poster.jpg",
      genre_ids: [10,11],
      vote_average: 8
    }
  ];
  const genres = [
    {
      "id": 1,
      "name": "Action"
    },
    {
      "id": 5,
      "name": "Adventure"
    },
    {
      "id": 9,
      "name": "Horror"
    },
    {
      "id": 10,
      "name": "Romantic"
    },
    {
      "id": 11,
      "name": "Comedy"
    }
  ];
  const rating = 5.5;
  const onGenresSelect = jest.fn();
  const onRateSelect = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<MovieFeed
      movies={movies}
      genres={genres}
      rating={rating}
      onGenresSelect={onGenresSelect}
      onRateSelect={onRateSelect}
    />);
  });

  describe("should render movies", () => {
    let movie1, movie2;
    beforeAll(() => {
      movie1 = wrapper.find('.movie').at(0);
      movie2 = wrapper.find('.movie').at(1);
    });

    it("should render the right number", () => {
      expect(wrapper.find('.movie')).toHaveLength(2);
    });

    it("should render the title", () => {
      expect(movie1.find('.title').text()).toEqual('Jaws');
      expect(movie2.find('.title').text()).toEqual('Love story');
    });

    it("should render the poster image", () => {
      expect(movie1.find('img').props().src).toEqual('https://image.tmdb.org/t/p/w300/jaws_poster.jpg');
      expect(movie2.find('img').props().src).toEqual('https://image.tmdb.org/t/p/w300/love_poster.jpg');
    });

    it("should render genres", () => {
      expect(movie1.find('.genres').text()).toEqual('Action, Adventure, Horror');
      expect(movie2.find('.genres').text()).toEqual('Romantic, Comedy');
    });

    it("should render average vote", () => {
      expect(movie1.find('.average-vote').text()).toEqual('7');
      expect(movie2.find('.average-vote').text()).toEqual('8');
    });
  });

  describe("should render genre filter", () => {
    let selectFilter;
    beforeAll(() => {
      selectFilter = wrapper.find('#genre-select');
    });

    it("with the right options", () => {
      expect(selectFilter.props().options).toEqual([
        { value: 1, label: 'Action' },
        { value: 5, label: 'Adventure' },
        { value: 9, label: 'Horror' },
        { value: 10, label: 'Romantic' },
        { value: 11, label: 'Comedy' }
      ]);
    });

    it("should call the genre filter handler when genres are selected", () => {
      selectFilter.simulate('change');
      expect(onGenresSelect).toHaveBeenCalled();
    });
  });

  describe("should render rating filter", () => {
    let ratingFilter;
    beforeAll(() => {
      ratingFilter = wrapper.find('#rating-select');
    });

    it("initially with default rating", () => {
      expect(ratingFilter.props().value).toEqual(rating);
    });

    it("should call the rating filter handler on filter click", () => {
      ratingFilter.simulate('starClick', 5);
      expect(onRateSelect).toHaveBeenCalledWith(5);
    });
  });

  describe("when there are no movies to render", () => {
    beforeAll(() => {
      wrapper = shallow(<MovieFeed
        movies={[]}
        genres={genres}
        rating={rating}
        onGenresSelect={onGenresSelect}
        onRateSelect={onRateSelect}
      />);
    });

    it("should render 'no results' message", () => {
      expect(wrapper.find('.error-message').text()).toEqual('No results found');
    });
  });
});
