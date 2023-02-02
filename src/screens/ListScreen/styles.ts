import { TextProps } from 'react-native';
import styled from 'styled-components/native';

export const AlteredText = styled.Text.attrs<TextProps>({
  allowFontScaling: false,
} as TextProps)``;

export const Container = styled.View`
  padding: 36px 16px 24px;
`;

export const Header = styled(AlteredText)`
  font-size: 34px;
  font-family: 'bold';
  line-height: 41px;
`;
