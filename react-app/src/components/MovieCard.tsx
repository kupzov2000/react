import { MovieCardProps } from '../types/types';

const MovieCard = ({ movieData }: MovieCardProps) => {
  const { Poster, Title, Year } = movieData;

  return (
    <div className="movie-card">
      <img src={Poster} className='movie-card-img' />
      <div className="movie-card-wrap">
        <h3 className='movie-card-title'>{Title}</h3>
        <p>{Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
