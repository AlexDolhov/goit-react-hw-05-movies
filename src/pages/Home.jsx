import { fetchTrandingMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        const response = await fetchTrandingMovies();
        const movies = response.results;
        console.log('response', response);
        console.log('movies', movies);
        setTrandingMovies(movies);
      } catch {
        // setError('Failed to load gallary :(');
        toast.error('Failed to load movies, please reload the page');
      }
      // } finally {
      //   // setIsLoading(false);
      // }
    };
    getTrandingMovies();
  }, []);

  return (
    <main>
      <h1>Tranding movie</h1>
      <MoviesList movies={trandingMovies} />
    </main>
  );
};

export default Home;
