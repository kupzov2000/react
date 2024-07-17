import { MainProps } from '../types/types';
import MovieCard from './MovieCard';

function Main({ data }: MainProps) {
  const isHasData = data && data.Search && data.Search.length;

  return (
    <main className="main">
      <div className="main-container">
        <div className="main-movies">
          {isHasData && data.Search.map((movieEl) => <MovieCard key={movieEl.imdbID} movieData={movieEl} />)}
        </div>
      </div>
    </main>
  );
}

export default Main;
