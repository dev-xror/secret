import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Row,
  Thumbnail,
  Column,
  Header,
  Description,
  TagRow,
  TagView,
  TagText,
  Title
} from './styles';
import { useTheme } from 'react-native-paper';

const Recommended = ({movie}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Video', { id: movie.id })
  }

  return (
      <Container onPress={onPress}>
          <Thumbnail source={{
            uri: movie.thumb
            }} />

        <Row>
            <Column>
              <Header>
                <Title style={{color: colors.onSurface}}>
                  {movie.title}
                </Title>
              </Header>
              <Description numberOfLines={2}  style={{color: colors.onSurface}}>
                {movie.description}
              </Description>
            </Column>

          <TagRow>
            <TagView>
              <TagText>{movie.views} views</TagText>
            </TagView>
            <TagView>
              <TagText>{movie.like} likes</TagText>
            </TagView>
            <TagView>
              <TagText>{movie.dislike} dislikes</TagText>
            </TagView>
          </TagRow> 
        </Row> 
        
      </Container>
    );
};

export default Recommended;