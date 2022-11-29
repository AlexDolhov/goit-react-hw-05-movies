import { fetchQueryMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      const getQueryMovies = async () => {
        try {
          const response = await fetchQueryMovies(query);
          const movies = response.results;
          // console.log('response', response);
          // console.log('movies', movies);
          setQueryMovies(movies);
        } catch {
          toast.error('Failed to load movies, please reload the page');
        }
      };
      getQueryMovies();
    }
  }, [query]);

  const querySubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBar queryValue={query} onSubmit={querySubmit} />
      <MoviesList movies={queryMovies} />
    </>
  );
};

export default Movies;
