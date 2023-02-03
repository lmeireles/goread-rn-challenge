import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  margin: 16px 0px 40px;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs<TextInputProps>({
  allowFontScaling: false,
  placeholder: 'Busca por repositórios',
  placeholderTextColor: 'rgba(60, 60, 67, 0.6)',
} as TextInputProps)`
  background-color: 'rgba(118, 118, 128, 0.12)';
  height: 36px;
  border-radius: 10px;
  font-family: 'regular';
  font-size: 17px;
  padding-left: 30px;
`;

export const SearchIcon = styled(Ionicons)`
  font-size: 15px;
  color: 'rgba(60, 60, 67, 0.6)';
  position: absolute;
  left: 8px;
`;
