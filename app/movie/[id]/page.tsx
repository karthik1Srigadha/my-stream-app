import Image from "next/image";
import { getMovieById } from "@/lib/tmdb";

export default async function MoviePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const movie = await getMovieById(id);

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={700}
        className="rounded-lg"
      />

      <div>
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="mt-3">{movie.overview}</p>

        <p className="mt-4 text-sm opacity-70">
          Release Date: {movie.release_date}
        </p>

        <p className="mt-2 text-sm opacity-70">
          Rating: {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
