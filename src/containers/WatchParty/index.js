import React, {useMemo, useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native';
import { 
  Container, 
  Main, 
  Wrapper 
} from "./styles";
import { useTheme } from 'react-native-paper';

import CategoryList from '../../components/CategoryList';
import ChannelList from '../../components/ChannelList';
import Title from '../../components/Title';
import StreamList from '../../components/StreamList';
import VideoDetails from '../../components/VideoDetails';

import Video from 'react-native-video';
import { useRoute } from '@react-navigation/native';

const VideoPlayer = () => {
  const { colors } = useTheme();
  const route = useRoute();
  const [movie, setMovie] = useState(route?.params?.movie);

  const { data, indices } = useMemo(() => {
    const items = [
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => (<Title>{movie.title}</Title>),
        isTitle: true,
      },
      { key: 'C1', render: () => (<VideoDetails movie={movie} />) },
      {
        key: 'LIVE_CHANNELS',
        render: () => (<Title>Live Channels</Title>),
        isTitle: true,
      },
      { key: 'C2', render: () => (<StreamList />) },
      {
        key: 'CONTINUE_WATCHING',
        render: () => (<View />),
        isTitle: true,
      },
      { key: 'C3', render: () => (<View />) },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => (<Title>Offline Channels</Title>),
        isTitle: true,
      },
      { key: 'C4', render: () => (<ChannelList />) },
    ];
  
    const indices = [];
  
    items.forEach((item, index) => item.isTitle && indices.push(index));
  
    return {
        data: items,
        indices,
      };
    }, []);

  return (
    <Wrapper style={{backgroundColor: colors.background}}>
        <View style={{marginTop:10}}>
            {
                movie && <Video
                source={{
                    uri: movie.url_720p
                }}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width * (9 / 16),
                    backgroundColor: 'black',
                    }}
                controls={true}
                resizeMode={'cover'}
                />
            }
        </View>
        <Container>
            <Main>
              <FlatList
                  data={data}
                  renderItem={({ item }) => item.render()}
                  keyExtractor={(item) => item.key}
                  stickyHeaderIndices={indices}
                  // Refresh Effect
                  onRefresh={() => {}}
                  refreshing={false}
                />
            </Main>
        </Container>
    </Wrapper>
  );
};

export default VideoPlayer;