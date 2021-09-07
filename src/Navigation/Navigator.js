import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Timer from '../components/Timer';
import Signup from "../components/Signup";
import BottomTab from "./BottomTab";
const AppNavigator = createStackNavigator({
  Signup:{
    screen:Signup,
    navigationOptions:()=>({
      headerShown:false,
    })
  },
  Timer: {
    screen: Timer,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  BottomTab:{
    screen:BottomTab,
    navigationOptions:()=>({
      headerShown:false,
    })
  }
 
}, {
  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: { gesturesEnabled: false },
}
);

export default createAppContainer(AppNavigator);  