import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import DetailsScreen from '../screens/DetailsScreen';
import ListScreen from '../screens/ListScreen';
import { AppNavigationParams } from './types';

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#FFF',
            paddingTop: getStatusBarHeight(),
          },
        }}
      >
        <Screen
          name='List'
          component={ListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen name='Details' component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
