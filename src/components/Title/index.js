import React from 'react';

import { Container } from './styles';
import { useTheme } from 'react-native-paper';

const Title = ({ children }) => {
    const {colors} = useTheme();
    return (
        <Container style={{
            color: colors.onSurface, 
            backgroundColor: colors.background
        }}>
            {children}
        </Container>
    );
};

export default Title;