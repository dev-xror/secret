import React, {useMemo} from 'react';
import { 
  View, 
  FlatList 
} from 'react-native';
import { 
  Container, 
  Main, 
  Wrapper 
} from "./styles";
import { useTheme } from 'react-native-paper';

import CategoryList from '../../components/CategoryList';
import ChannelList from '../../components/ChannelList';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import StreamList from '../../components/StreamList';

const Following = () => {
  const { colors } = useTheme();
  const { data, indices } = useMemo(() => {
  const items = [
    {
      key: 'PAGE_HEADING',
      render: () => (<Heading>Following</Heading>),
    },
    {
      key: 'FOLLOWED_CATEGORIES',
      render: () => (<Title>Followed Categories</Title>),
      isTitle: true,
    },
    { key: 'C1', render: () => (<CategoryList />) },
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

export default Following;