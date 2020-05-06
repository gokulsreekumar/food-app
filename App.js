import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetailedScreen from "./src/screens/ResultDetailedscreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultDetailedScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
