import { fetchMovieById } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  // console.log(movieId);
  // console.log('MovieDetails location:', location.state);

  useEffect(() => {
    if (movieId) {
      const getMovieById = async () => {
        try {
          const response = await fetchMovieById(movieId);
          const movie = response;
          // console.log(movie);
          setMovie(movie);
        } catch {
          toast.error(
            'Failed to load movie detailed information, please reload the page'
          );
        }
      };
      getMovieById();
    }
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}></BackLink>
      <h2>{movie.title}</h2>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
