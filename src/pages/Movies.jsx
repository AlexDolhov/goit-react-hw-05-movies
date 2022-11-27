import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  return (
    <main>
      <SearchBar />
      <MoviesList movies={queryMovies} />
      <Outlet />
    </main>
  );
};

export default Movies;
