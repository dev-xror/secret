import React from 'react';
import { useTheme } from 'react-native-paper';
import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

import data from './data';

const CategoryList = () => {
  const { colors } = useTheme();
  const CategoryItem = ({ item }) => (
      <CategoryContainer>
          <CategoryImage source={item.source} />
          <CategoryName numberOfLines={1} style={{color:colors.onSurface}}>{item.name}</CategoryName>
          <CategoryStatus>
          <RedCircle />
          <Info>51.9K</Info>
          </CategoryStatus>
      </CategoryContainer>
  );
    
  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;