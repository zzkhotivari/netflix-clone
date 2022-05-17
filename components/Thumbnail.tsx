import { Movie } from "../typings";
import Image from "next/image";

interface IProps {
  movie: Movie;
}

function Thumbnail({ movie }: IProps) {
  return (
    <div className="relative h-28 min-w-[180px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
}

export default Thumbnail;
