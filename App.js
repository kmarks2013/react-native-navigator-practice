import {createStackNavigator, createAppContainer} from "react-navigation"
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator({
  Home: HomeScreen
}, {
  initalRouteName: "Search",
  defaultNavigationOptions: {
    title: "App"
  }
})

export default createAppContainer(navigator)