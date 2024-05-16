// @ts-nocheck

export async function load({ fetch }) {
  const res = await fetch("/movies");
  const data = await res.json();
  return {
    props: {
      movies: data.movies,
    },
  };
}
