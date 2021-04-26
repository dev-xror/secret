import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../themes/colors';
import { 
    Container, 
    Avatar, 
    OnlineStatus, 
    RightSide, 
    Button 
} from './styles';

const Header = () => {
    return (
        <Container>
            <Avatar>
                <OnlineStatus />
            </Avatar>
    
            <RightSide>
                <Button>
                    <MaterialIcons
                    name="notifications-none"
                    size={26}
                    color={colors.white}
                    />
                </Button>
        
                <Button>
                    <MaterialCommunityIcons
                    name="message-outline"
                    size={26}
                    color={colors.white}
                    />
                </Button>
        
                <Button>
                    <Feather name="search" size={26} color={colors.white} />
                </Button>
            </RightSide>
        </Container>
    );
};

export default Header;