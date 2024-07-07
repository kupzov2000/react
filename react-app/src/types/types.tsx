interface SearchMovie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

export type MovieCardProps = {
  movieData: SearchMovie;
};

export interface DataMovies {
  Search: SearchMovie[];
}

export type MainProps = {
  data: DataMovies;
};
