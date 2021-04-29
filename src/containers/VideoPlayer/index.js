import React, {useMemo, useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, Image, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native';
import { 
  Container, 
  Main, 
  Wrapper,
  VideoContainer,
  ChatInputContainer
} from "./styles";
import { useTheme } from 'react-native-paper';

import ChatList from '../../components/ChatList';
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
        key: 'OFFLINE_CHANNELS',
        render: () => (<Title>Chat</Title>),
        isTitle: true,
      },
      { key: 'C4', render: () => (<ChatList />) },
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
        <VideoContainer>
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
        </VideoContainer>
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
                  //contentContainerStyle={{ paddingBottom: 200 }}
                />
            </Main>
        </Container>
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Write a message..."
                    underlineColorAndroid='transparent'/>
            </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
    </Wrapper>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    list:{
      paddingHorizontal: 17,
    },
    footer:{
      flexDirection: 'row',
      backgroundColor: 'transparent',
      paddingHorizontal:10,
      padding:5,
    },
    btnSend:{
      backgroundColor:"#00BFFF",
      width:40,
      height:40,
      borderRadius:360,
      alignItems:'center',
      justifyContent:'center',
    },
    iconSend:{
      width:30,
      height:30,
      alignSelf:'center',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#d3d3d3',
      borderRadius:30,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
    inputs:{
      height:40,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
    },
    balloon: {
      maxWidth: 250,
      padding: 15,
      borderRadius: 20,
    },
    itemIn: {
      alignSelf: 'flex-start'
    },
    itemOut: {
      alignSelf: 'flex-end'
    },
    time: {
      alignSelf: 'flex-end',
      margin: 15,
      fontSize:12,
      color:"#808080",
    },
    item: {
      marginVertical: 14,
      flex: 1,
      flexDirection: 'row',
      backgroundColor:"#eeeeee",
      borderRadius:300,
      padding:5,
    },
  }); 