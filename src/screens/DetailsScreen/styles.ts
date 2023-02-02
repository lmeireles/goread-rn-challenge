import { ActivityIndicator } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { AlteredText } from '../ListScreen/styles';

export const WebViewPage = styled(WebView)`
  flex: 1;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  padding-top: 24px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderText = styled(AlteredText)`
  font-size: 16px;
  font-family: 'semibold';
  line-height: 24px;
`;

export const Loader = styled(ActivityIndicator)`
  position: absolute;
  align-self: center;
  top: 45%;
`;
