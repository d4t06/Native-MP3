import {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useContext,
   useState,
} from "react";
import { Track } from "react-native-track-player";
import { retry } from "react-native-track-player/lib/src/trackPlayer";

// init State

// type StateType = {
//    songs: Track[];
// };

// const initState: StateType = {
//    songs: [],
// };

// context
type ContextType = {
   songs: Track[];
   setSongs: Dispatch<SetStateAction<Track[]>>;
};

const initContextState: ContextType = {
   setSongs: () => {},
   songs: [],
};

const SongContext = createContext<ContextType>(initContextState);

// provider

export default function SongProvider({ children }: { children: ReactNode }) {
   const [songs, setSongs] = useState<Track[]>([]);

   return (
      <SongContext.Provider value={{ songs, setSongs }}>
         {children}
      </SongContext.Provider>
   );
}

export const useSongContext = () => {
   const context = useContext(SongContext);

   return context;
};
