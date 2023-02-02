import { RespositoryProps } from '../../services/api';
import {
  Avatar,
  ItemContainer,
  LeftPart,
  OwnerLogin,
  RepoDetailsContainer,
  RepoName,
  RepoStars,
} from './styles';

export type ListItemProps = {
  data: RespositoryProps;
};

export default function ListItem({
  data: { name, owner, stargazers_count },
}: ListItemProps) {
  return (
    <ItemContainer>
      <Avatar source={{ uri: owner.avatar_url }} />
      <RepoDetailsContainer>
        <LeftPart>
          <RepoName>{name}</RepoName>
          <OwnerLogin>{owner.login}</OwnerLogin>
        </LeftPart>
        <RepoStars>{`${stargazers_count} stars`}</RepoStars>
      </RepoDetailsContainer>
    </ItemContainer>
  );
}
