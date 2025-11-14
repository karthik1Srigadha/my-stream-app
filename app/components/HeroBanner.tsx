import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute bottom-10 left-10 text-white max-w-lg">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="mt-2">{movie.overview}</p>
      </div>
    </section>
  );
}
