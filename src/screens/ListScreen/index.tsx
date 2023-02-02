import React from 'react';
import List from '../../components/List';
import SearchInput from '../../components/SearchInput';
import { Container, Header } from './styles';

export default function ListScreen() {
  return (
    <Container>
      <Header>Repositórios</Header>
      <SearchInput />
      <List />
    </Container>
  );
}
