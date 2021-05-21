import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import BusListScreen from './BusListScreen';

const navigator = createStackNavigator(
  {
    BusList: BusListScreen
  }, {
  initialRouteName: 'BusList',
  defaultNavigationOptions: {
    title: 'bus for everyone'
  }
})

export default createAppContainer(navigator);