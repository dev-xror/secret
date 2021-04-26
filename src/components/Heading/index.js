import React from 'react';
import {  
    Container,
    HeadingText
} from './styles';
import { useTheme } from 'react-native-paper';

const Heading = ({children}) => {
    const { colors } = useTheme();
    return (
        <Container>
            <HeadingText style={{color: colors.onSurface}}>
                {children}
            </HeadingText>
        </Container>
    );
};

export default Heading;