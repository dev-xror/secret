import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;

  margin-bottom: 24px;
  margin-right: 24px;
`;

export const Row = styled.View`
  margin-left: 11px;
  flex: 1;
`;

export const Thumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const Column = styled.View`
  height: 55px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: System;
  font-size: 15px;
  font-weight: 600;
`;

export const Description = styled.Text`
  color: ${colors.white};
`;

export const Category = styled.Text`
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
