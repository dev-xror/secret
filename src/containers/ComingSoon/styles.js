import styled from 'styled-components/native';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

import colors from '../../themes/colors';

const statusBarHeight =
  Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;


export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: System;
  font-size: 30px;
`;
