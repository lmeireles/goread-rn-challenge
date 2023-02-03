import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import { AppNavigationParams, useAppNavigation } from '../../routes/types';
import {
  Container,
  HeaderContainer,
  HeaderText,
  Loader,
  WebViewPage,
} from './styles';

export default function DetailsScreen() {
  const navigation = useAppNavigation();
  const [isLoading, setLoading] = useState(true);
  const route = useRoute<RouteProp<AppNavigationParams, 'Details'>>();
  const { name, login } = route.params;

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderContainer>
          <BackButton />
          <HeaderText>{name}</HeaderText>
        </HeaderContainer>
      ),
    });
  }, [name]);

  return (
    <Container>
      <WebViewPage
        onLoadEnd={() => setLoading(false)}
        source={{ uri: `https://github.com/${login}` }}
      />
      {isLoading && <Loader color={'#000'} size={50} />}
    </Container>
  );
}
