"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
  return (
    <section className="px-4 my-6">
      <h2 className="text-xl font-semibold mb-3">{categoryTitle}</h2>

      <div className="flex overflow-x-auto gap-4 pb-4">
        {movies.map(movie => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={220}
              className="rounded-md"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
