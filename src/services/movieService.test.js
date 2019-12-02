import { getGenres, getMovies } from './movieService';
import axios from 'axios';
jest.mock('axios');

describe("movie service", () => {
  describe("when we request genres", () => {
    describe("and request is successful", () => {
      beforeEach(() => {
        axios.get.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              genres: [1,2,3]
            }
          })
        );
      });

      it("should return genres", async () => {
        const genres = await getGenres();

        expect(genres).toEqual([1,2,3]);
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe("and request is NOT successful", () => {
      beforeEach(() => {
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error('some genre error'))
        );
      });

      it("should throw an error", async () => {
        try {
          await getGenres()
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('message', 'some genre error');
        }
      });

      afterEach(() => {
        jest.clearAllMocks();
      })
    })
  });

  describe("when we request movies", () => {
    describe("and request is successful", () => {
      beforeEach(() => {
        axios.get.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              results: ['movie 1', 'movie 2', 'movie 3']
            }
          })
        );
      });

      it("should return movies", async () => {
        const movies = await getMovies();

        expect(movies).toEqual(['movie 1', 'movie 2', 'movie 3']);
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe("and request is NOT successful", () => {
      beforeEach(() => {
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error('some movie error'))
        );
      });

      it("should throw an error", async () => {
        try {
          await getMovies()
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('message', 'some movie error');
        }
      });

      afterEach(() => {
        jest.clearAllMocks();
      })
    })
  });


});

