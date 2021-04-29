import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import { useTheme } from 'react-native-paper';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';


const MovieDetails = ({movie}) => {
  const { colors } = useTheme();
  const StreamItem = () => (
      <StreamContainer>
        <StreamRow>
          <StreamColumn>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1} style={{color:colors.onSurface}}>TLD3 Production Studios</StreamUsername>
            </StreamHeader>
  
            <StreamDescription numberOfLines={3} style={{color:colors.onSurface}}>
              {movie.description}
            </StreamDescription>
  
            <StreamCategory numberOfLines={1}>
              Romantic Comedy
            </StreamCategory>
            
          </StreamColumn>
  
          <TagRow>
            <TagView>
              <TagText>{movie.views} Views</TagText>
            </TagView>
            <TagView>
              <TagText>{movie.like} Likes</TagText>
            </TagView>
            <TagView>
              <TagText>{movie.dislike} Dislikes</TagText>
            </TagView>
          </TagRow>
        </StreamRow>
      </StreamContainer>
    );
    return (
        <List>
            <StreamItem />
      </List>
    );
};

export default MovieDetails;