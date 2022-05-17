import { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from "../constants/movie";

interface IProps {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: IProps) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);

  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p>{movie?.overview}</p>
    </div>
  );
}

export default Banner;
