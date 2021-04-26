import React from 'react';
import { useTheme } from 'react-native-paper';
import { Heading, Wrapper } from './styles';

const ComingSoon = () => {
    const { colors } = useTheme();
    return (
        <Wrapper style={{backgroundColor: colors.background}}>
            <Heading>
                Coming Soon
            </Heading>
        </Wrapper>
    );
};

export default ComingSoon;