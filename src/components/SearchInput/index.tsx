import React, { useEffect, useState } from 'react';
import { getRepositories, setRepositories } from '../../redux/actions';
import { useAppDispatch } from '../../redux/store';
import { Container, Input, SearchIcon } from './styles';

export default function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (inputValue.length) dispatch(getRepositories(inputValue, 1));
  };

  useEffect(() => {
    dispatch(setRepositories([], 1, false));
  }, [inputValue]);

  return (
    <Container>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        returnKeyType='search'
        onSubmitEditing={handleSearch}
        onBlur={handleSearch}
      />
      <SearchIcon name='ios-search' />
    </Container>
  );
}
