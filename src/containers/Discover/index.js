import React, {useMemo, useEffect} from 'react';
import { 
    FlatList, 
} from 'react-native';
import { 
    Container, 
    Main, 
    Wrapper 
} from "./styles";
import { useTheme } from 'react-native-paper';

import Heading from '../../components/Heading';
import Title from '../../components/Title';
import TrendingList from '../../components/TrendingList';
import RecommendedList from '../../components/RecommendedList';

import axios from 'axios';

const BASE_URI = 'https://uhooru.live/api/v1';

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtb3JwaCIsImV4cCI6MTYxOTI4ODIzNCwiaWF0IjoxNjE2ODY5MDM0LCJpc3MiOiJtb3JwaCIsImp0aSI6IjAwZDNiZmRjLTU4ODgtNDI3Mi05NjM2LWE4NTZiZjhmYTFhNiIsIm5iZiI6MTYxNjg2OTAzMywic3ViIjoiMzEiLCJ0eXAiOiJhY2Nlc3MifQ.eVH_lxr0gHUQO-9g1vDIRDYz4sFmmfzuw0F4fj_w1IUw8sHYZmJUeMZ0DN8cVpM6UApxfwZF8q5y5N2oAYXY_w";


const Discover = () => {
  const { colors } = useTheme();
    const { data, indices } = useMemo(() => {
        const items = [
          {
            key: 'PAGE_HEADING',
            render: () => (<Heading>Discover</Heading>),
          },
          {
            key: 'TRENDING',
            render: () => (<Title>Trending Videos</Title>),
            isTitle: true,
          },
          { key: 'C1', render: () => (<TrendingList />) },
          {
            key: 'RECOMMENDEDVIDEOS',
            render: () => (<Title>Recommended Videos</Title>),
            isTitle: true,
          },
          { key: 'C2', render: () => (<RecommendedList />) }
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
    )
};

export default Discover;