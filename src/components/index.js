import React, {useMemo} from 'react';
import { 
    FlatList, 
} from 'react-native';
import { 
    Container, 
    Main, 
    Wrapper 
  } from "./styles";
  
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import TrendingList from '../../components/TrendingList';
import RecommendedList from '../../components/RecommendedList';

const Browse = () => {

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
        <Wrapper>
            <Container>
                <Header />
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

export default Browse;