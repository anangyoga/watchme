import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-sm cursor-pointer rounded-md overflow-hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={700} height={800} alt={movie.title} />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-1">{movie.title}</div>
        <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
