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
`;

export const Container = styled.View`
  padding-left: 14px; 
  flex: 2;
`;

export const VideoContainer = styled.View`
  margin-top:10px;
  flex: 1
`;

export const ChatInputContainer = styled.View`
  height: 75px;
`;

export const Main = styled.View``;
