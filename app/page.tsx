import { getPopularMovies } from "../lib/tmdb";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";

export default async function Home() {
  const data = await getPopularMovies();
  const movies = data.results;

  return (
    <main>
      <HeroBanner movie={movies[0]} />
      <MovieRow movies={movies} categoryTitle="Popular Movies" />
    </main>
  );
}