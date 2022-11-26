import { SearchBar } from 'components/SearchBar/SearchBar';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <main>
      <SearchBar />
      <Outlet />
    </main>
  );
};

export default Movies;
