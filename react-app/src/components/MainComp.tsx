import { MainProps } from "../types/types";
import MovieCard from "./MovieCard";

const Main = ({ data }: MainProps) => {
  return (<main className="main">
    <div className="main-container">
      <div className="main-movies">
        {data.Search.map((movieEl) => (
          <MovieCard key={movieEl.imdbID} movieData={movieEl} />
        ))}
      </div>
    </div>
  </main>);
};

export default Main;