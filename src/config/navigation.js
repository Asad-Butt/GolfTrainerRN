import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Intro from "../Screens/Intro";

import Menu from "../Screens/Menu";
import Club from "../Screens/Club";
import GapTest from "../Screens/GapTest";
import Accuracy from "../Screens/Accuracy";
import Result from "../Screens/Result";

const Navigation = createStackNavigator(
  {
    Intro: {
      screen: Intro,
    },
    Menu: {
      screen: Menu,
    },
    Club: {
      screen: Club,
    },
    GapTest: {
      screen: GapTest,
    },
    Accuracy: {
      screen: Accuracy,
    },
    Result: {
      screen: Result,
    },
  },
  {
    initialRouteName: "Intro",
    mode: "card",
    headerMode: "none",
  }
);

const Defaultor = createAppContainer(Navigation);

export default Defaultor;
