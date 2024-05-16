const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

async function isPosterAccessible(posterUrl) {
  try {
    const response = await fetch(posterUrl, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function loadMoviesData() {
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
      return null;
    })
  );

  return moviesWithAccessiblePosters.filter((movie) => movie !== null);
}

app.get("/movies", async (req, res) => {
  try {
    const movies = await loadMoviesData();
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
