export default movies => movies.sort(comparePopularity);

const comparePopularity = (a, b) => {
  if (a.popularity > b.popularity) {
    return -1;
  }

  if (a.popularity < b.popularity) {
    return 1;
  }

  return 0;
};
