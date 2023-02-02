import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNavigationParams = {
  List: undefined;
  Details: { id: string };
};

export type AppNavigation = NativeStackNavigationProp<AppNavigationParams>;

export const useAppNavigation = () => useNavigation<AppNavigation>();
