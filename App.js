//import liraries
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/Screens/Home';
import List from './src/Screens/List';
import Image from './src/Screens/Image';
import CounterScreen from './src/Screens/CounterScreen';
import ColorScreen from './src/Screens/ColorScreen';
import SquareScreen from './src/Screens/SquareScreen';

// create a component
const navigator = createStackNavigator(
  {
    Home: Home,
    List: List,
    Image: Image,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    intialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

// define your styles


//make this component available to the app
export default createAppContainer(navigator);