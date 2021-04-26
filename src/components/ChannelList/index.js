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

const ChannelList = () => {
  const {colors} = useTheme();
  const ChannelItem = () => (
      <ChannelContainer>
        <LeftSide>
          <Avatar />
          <Column>
            <Username style={{color:colors.onSurface}}>rocketseat_oficial</Username>
            <Info>36 new videos</Info>
          </Column>
        </LeftSide>

        <RightSide>
          <WhiteCircle style={{backgroundColor:colors.onSurface}}/>
        </RightSide>
      </ChannelContainer>
    );
    
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;