import { useAppNavigation } from '../../routes/types';
import { Button, IconBack } from './styles';

export default function BackButton() {
  const { goBack } = useAppNavigation();
  return (
    <Button onPress={goBack}>
      <IconBack name='ios-chevron-back' />
    </Button>
  );
}
