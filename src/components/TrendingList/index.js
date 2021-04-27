import React, { useEffect, useState } from 'react';
import {View} from 'react-native';

import {
  List
} from './styles';

import TrendingItem from '../TrendingItem';

import { getMoviesAsync } from '../../services/movie.service';

const TrendingList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMoviesAsync();
      setMovies(result.data);
    }
    fetchData();
  }, []);

  return (
    <View>
      <List>
        {movies.map((movie) => (
          <TrendingItem key={movie.id} movie={movie} />
        ))}
      </List>
    </View>
  );
};

export default TrendingList;