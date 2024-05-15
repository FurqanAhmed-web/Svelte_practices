<script>
  // @ts-ignore
  export let data;
  let { movies } = data;
  console.log(movies);

  let y = "";
  let movieName ='';
</script>

<h1>Movies</h1>
<h4>Filter by year</h4>
<input type="text" bind:value={y} />
<h4>Filter by name</h4>
<input type="text" bind:value={movieName} />

<div class="container">
  {#each movies as movie}
    {#if (movie.year === y || y === "") && (movie.title
        .toLowerCase()
        .includes(movieName.toLowerCase()) || movieName === "")}
      <div class="card">
        <img src={movie.posterUrl} alt="" />
        <h1>{movie.title} - {movie.year} - {movie.genres[1]}</h1>
      </div>
    {/if}
  {/each}
</div>

<style>
  /* Style for the container */
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  /* Style for individual movie */
  .container h1 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .container img {
    max-width: 200px;
    max-height: 300px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  /* Optional hover effect for the movie poster */
  .container img:hover {
    transform: scale(1.05);
  }

  .card {
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .card h1 {
    font-size: 1.2em;
    margin-top: 10px;
    margin-bottom: 0;
  }
</style>
