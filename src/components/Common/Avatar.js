import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const OnlineStatus = styled.View`
  background: ${colors.green};

  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${colors.primary};

  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  marginLeft: 15px;
`;