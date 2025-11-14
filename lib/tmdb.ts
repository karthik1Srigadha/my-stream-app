const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
  return res.json();
}

export async function getMovieById(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`);
  return res.json();
}
