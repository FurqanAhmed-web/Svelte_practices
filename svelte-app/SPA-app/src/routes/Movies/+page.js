// @ts-nocheck

async function isPosterAccessible(posterUrl) {
  try {
    const response = await fetch(posterUrl, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json"
  );
  const data = await res.json();

  if (!data || !data.movies) {
    throw new Error("Movies data not found");
  }

  const moviesWithAccessiblePosters = await Promise.all(
    data.movies.map(async (movie) => {
      const posterAccessible = await isPosterAccessible(movie.posterUrl);
      if (posterAccessible) {
        return movie;
      }
      return null; // Filter out movies with inaccessible posters
    })
  );

  const filteredMovies = moviesWithAccessiblePosters.filter(
    (movie) => movie !== null
  );

  return {
    movies: filteredMovies,
  };
}
