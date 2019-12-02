import popularitySorter from './popularitySorter';

describe("popularity sorter", () => {
  it("should sort movies according to their popularity, more popular first", () => {
    const movies = [
      {
        title: "Angel Has Fallen",
        popularity: 4.1
      },
      {
        title: "Ready or Not",
        popularity: 5.5
      },
      {
        title: "Gemini Man",
        popularity: 7.3
      }
    ];
    // copy the original array for reference as array.sort mutates the data
    const unsortedMovies = [...movies];

    expect(popularitySorter(movies)).toEqual([unsortedMovies[2], unsortedMovies[1], unsortedMovies[0]]);
  });
});
