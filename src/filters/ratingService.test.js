import ratingFilter from "./ratingFilter";

describe("rating filter", () => {
  it("should select movies with rating higher or equal that the one specified", () => {
    const movies = [
      {
        title: "Angel Has Fallen",
        "vote_average": 4.1
      },
      {
        title: "Ready or Not",
        "vote_average": 6.8
      },
      {
        title: "Gemini Man",
        "vote_average": 5.7
      }
    ];
    expect(ratingFilter(6)(movies)).toEqual([movies[1]]);
    expect(ratingFilter(5)(movies)).toEqual([movies[1], movies[2]]);
    expect(ratingFilter(4)(movies)).toEqual([movies[0], movies[1], movies[2]]);
  })
});
