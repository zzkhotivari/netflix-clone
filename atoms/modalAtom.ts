import { atom } from "recoil";
import { Movie } from "../typings";
import { DocumentData } from "firebase/firestore";

const modalState = atom({
  key: "modalState",
  default: false,
});

const movieState = atom<Movie | DocumentData | null>({
  key: "movieState",
  default: null,
});

export { modalState, movieState };
