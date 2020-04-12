import {createStackNavigator, createAppContainer} from 'react-navigator'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator({
  Home: HomeScreen
}, {
  initalRouteName: "Search",
  defaultNavigationOptions: {
    title: "App"
  }
})