import styled from 'styled-components/native';
import { AlteredText } from '../../screens/ListScreen/styles';

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Avatar = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 26px;
`;

export const RepoDetailsContainer = styled.View`
  margin-left: 12px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
`;

export const LeftPart = styled.View`
  justify-content: space-between;
`;

export const RepoName = styled(AlteredText)`
  font-size: 16px;
  line-height: 24px;
  font-family: 'bold';
`;

export const OwnerLogin = styled(AlteredText)`
  font-size: 14px;
  line-height: 24px;
  font-family: 'regular';
  color: '#48484A';
  padding-bottom: 12px;
`;

export const RepoStars = styled(AlteredText)`
  font-size: 14px;
  line-height: 18px;
  font-family: 'regular';
  color: '#48484A';
`;
