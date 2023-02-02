import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { GET_REPOSITORIES } from '../../redux/actions';
import { getAllRepositories, getMinorDetails } from '../../redux/reselector';
import { useAppDispatch } from '../../redux/store';
import ListItem from '../ListItem';
import { NoMoreResults } from './styles';

export default function searchTerm() {
  const data = useSelector(getAllRepositories);
  const {
    isLoading,
    isThereMore,
    page: currentPage,
    searchTerm,
  } = useSelector(getMinorDetails);

  const dispatch = useAppDispatch();
  return (
    <FlatList
      bounces={false}
      contentContainerStyle={{
        paddingBottom: 110,
      }}
      keyExtractor={() => Math.random().toString()}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <ListItem data={item} />}
      ListFooterComponent={() =>
        isLoading ? (
          <ActivityIndicator size={30} color={'#000'} />
        ) : !data.length ? (
          <NoMoreResults>Não há resultados</NoMoreResults>
        ) : !isThereMore ? (
          <NoMoreResults>Não há mais resultados</NoMoreResults>
        ) : null
      }
      onEndReachedThreshold={0.3}
      onEndReached={() => {
        isThereMore && !isLoading
          ? dispatch({
              type: GET_REPOSITORIES,
              payload: { page: currentPage + 1, searchTerm },
            })
          : null;
      }}
    />
  );
}
