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


const StreamList = () => {
  const { colors } = useTheme();
  const StreamItem = () => (
      <StreamContainer>
        <StreamThumbnail source={streamThumbnail} />
  
        <StreamRow>
          <StreamColumn>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1} style={{color:colors.onSurface}}>rodz_oficial</StreamUsername>
            </StreamHeader>
  
            <StreamDescription numberOfLines={1} style={{color:colors.onSurface}}>
              Front-end com Next.js, Chakra UI e GraphQL
            </StreamDescription>
  
            <StreamCategory numberOfLines={1}>
              Science & Technology
            </StreamCategory>
          </StreamColumn>
  
          <TagRow>
            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>
            <TagView>
              <TagText>Web Development</TagText>
            </TagView>
          </TagRow>
        </StreamRow>
      </StreamContainer>
    );
    return (
        <List>
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
      </List>
    );
};

export default StreamList;