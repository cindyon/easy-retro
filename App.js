import HomeScreen from './HomeScreen';
import RetroItemsScreen from './RetroItemsScreen';
import ConfigureScreen from './ConfigureScreen';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  Home: { screen: HomeScreen },
  RetroItems: { screen: RetroItemsScreen },
  Configure: { screen: ConfigureScreen}
});

