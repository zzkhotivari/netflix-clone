import MuiModal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/outline";
import { Element, Genre } from "../typings";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

function Modal() {
  const [muted, setMuted] = useState(true);
  const [movie, setMovie] = useRecoilState(movieState);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [trailer, setTrailer] = useState("");
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`,
      ).then((res) => res.json());

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer",
        );
        setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9
           border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon />
        </button>
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
