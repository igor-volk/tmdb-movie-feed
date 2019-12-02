import genreFilter from './genreFilter';

describe("genre filter", () => {
  it("should include the movies that match specified genres", () => {
    const movies = [
      {
        title: "Angel Has Fallen",
        "vote_average": 4.1,
        "genre_ids": [
          27,
          53
        ],
      },
      {
        title: "Ready or Not",
        "vote_average": 6.8,
        "genre_ids": [
          27,
          67
        ],
      },
      {
        title: "Gemini Man",
        "vote_average": 5.7,
        "genre_ids": [
          29
        ],
      }
    ];

    expect(genreFilter([27])(movies)).toEqual([movies[0], movies[1]]);
    expect(genreFilter([27, 67])(movies)).toEqual([movies[1]]);
    expect(genreFilter([27, 57])(movies)).toEqual([]);
  });
});
