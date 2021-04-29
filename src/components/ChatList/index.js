import React from 'react';
import {useTheme} from 'react-native-paper';
import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

import chats from '../../model/chats';

const ChatList = () => {
  const {colors} = useTheme();
  const ChannelItem = ({chat}) => (
      <ChannelContainer>
        <LeftSide>
          <Username style={{color:colors.onSurface}}>{chat.username}: </Username>
          <Info>{chat.message}</Info>
        </LeftSide>

        <RightSide>
          <WhiteCircle style={{backgroundColor:colors.onSurface}}/>
        </RightSide>
      </ChannelContainer>
    );

  
    
  return (
    <List>
      {
        chats.map((chat, index) => (
          <ChannelItem key={index} chat={chat}/>
        ))
      }
    </List>
  );
};

export default ChatList;