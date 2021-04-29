import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Description,
  Image,
  Status,
  RedCircle,
  Info,
  TagRow,
  TagView,
  TagText,
  Title
} from './styles';
import { useTheme } from 'react-native-paper';

const TrendingItem = ({ movie }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('VideoPlayer', { movie: movie })
  }

  return (
  <Container onPress={onPress}>
      <Image source={{
        uri: movie.thumb
      }} />
      <Title numberOfLines={1} style={{color: colors.onSurface}}>{movie.title}</Title>
      <Description numberOfLines={1}  style={{color: colors.onSurface}}>{movie.description}</Description>
      <TagRow>
        <TagView>
          <Status>
          <RedCircle />
          <Info>{movie.views}</Info>
          </Status>
        </TagView>
        <TagView>
          <TagText>{movie.like} likes</TagText>
        </TagView>
        <TagView>
          <TagText>{movie.dislike} dislikes</TagText>
        </TagView>
      </TagRow>
  </Container>
  )
};

export default TrendingItem;