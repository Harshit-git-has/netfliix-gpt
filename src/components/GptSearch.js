import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <>
        <div className="absolute -z-10">
        <img className=""
        src={BG_URL} alt="logo" />
    </div>
    <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>   
    </>
  );
};

export default GptSearch;