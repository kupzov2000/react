import { Component } from 'react';
import { MainProps } from '../types/types';
import MovieCard from './MovieCard';

class Main extends Component<MainProps> {
  render() {
    const { data } = this.props;

    return (
      <main className="main">
        <div className="main-container">
          <div className="main-movies">
            {data && data.Search.map((movieEl) => <MovieCard key={movieEl.imdbID} movieData={movieEl} />)}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
