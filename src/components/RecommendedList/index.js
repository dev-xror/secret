import React, { useState,useEffect } from 'react';

import {
  List
} from './styles';

import Recommended from '../Recommended';

import { getMoviesAsync } from '../../services/movie.service';

const RecommendedList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMoviesAsync();
      setMovies(result.data);
    }
    fetchData();
  }, []);

    return (
        <List>
            {movies.map((movie) => (
              <Recommended key={movie.id} movie={movie}/>
            ))}
        </List>
    );
};

export default RecommendedList;