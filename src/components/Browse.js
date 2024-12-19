import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcoming from '../hooks/useUpcoming';
import { useSelector } from 'react-redux';
import GptSearch from "./GptSearch";


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
   
useNowPlayingMovies();
usePopularMovies();
useTrendingMovies();
useTopRatedMovies();
useUpcoming();

  return (
    <div>
      <Header />
      {
        showGptSearch ?( <GptSearch />

        ):(
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      )}
      
     </div>
  );
};

export default Browse;