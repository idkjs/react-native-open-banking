// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as SignIn from "./SignIn.bs.js";
import * as Dashboard from "./Dashboard.bs.js";
import * as ReactNavigation from "react-navigation";
import * as AppContainer$ReactNavigation from "reason-react-navigation/src/AppContainer.bs.js";

var $$navigator = ReactNavigation.createSwitchNavigator({
      SignIn: ReactNavigation.createStackNavigator({
            SignIn: SignIn.make
          }),
      Dashboard: ReactNavigation.createStackNavigator({
            Dashboard: Dashboard.make
          })
    });

var SumiAppContainer = AppContainer$ReactNavigation.Make(/* module */[/* navigator */$$navigator]);

export {
  SumiAppContainer ,
  
}
/* SumiAppContainer Not a pure module */