import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.TouchableOpacity`
  /* background: purple; */
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 200px;
`;

export const Title = styled.Text`
  margin-top: 5px;
  max-width: 280px;
  color: ${colors.white};
  font-family: System;
  font-weight: 600;
  font-size: 17px;
`;

export const Description = styled.Text`
  margin-top: 5px;
  max-width: 280px;
  color: ${colors.white};
  font-family: System;
  font-size: 13.5px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  background: ${colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${colors.gray};
  font-family: System;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  margin-right: 5px;
  border-radius: 10px;
`;

export const TagText = styled.Text`
  color: ${colors.white};
  font-family: System;
  font-size: 13px;
`;