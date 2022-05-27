import Image from "next/image";
import { Movie } from "../typings";
import { DocumentData } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface IProps {
  movie: Movie | DocumentData;
}

function Thumbnail({ movie }: IProps) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition 
      duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover md:rounded" />
    </div>
  );
}

export default Thumbnail;
