import { Component } from 'react';
import { MovieCardProps } from '../types/types';

class MovieCard extends Component<MovieCardProps> {
  render() {
    const { Poster, Title, Year } = this.props.movieData;

    return (
      <div className="movie-card">
        <img src={Poster} className="movie-card-img" />
        <div className="movie-card-wrap">
          <h3 className="movie-card-title">{Title}</h3>
          <p>{Year}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
