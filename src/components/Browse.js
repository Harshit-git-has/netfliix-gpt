import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcoming from '../hooks/useUpcoming';

const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTrendingMovies();
useTopRatedMovies();
useUpcoming();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;