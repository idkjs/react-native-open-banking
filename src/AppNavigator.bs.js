// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as SignIn from "./SignIn.bs.js";
import * as Accounts from "./Accounts.bs.js";
import * as Dashboard from "./Dashboard.bs.js";
import * as AuthLoading from "./AuthLoading.bs.js";
import * as ReactNavigation from "react-navigation";
import * as AppContainer$ReactNavigation from "reason-react-navigation/src/AppContainer.bs.js";

var routes = {
  SignIn: SignIn.make
};

var $$navigator = ReactNavigation.createStackNavigator(routes, {
      mode: "modal",
      headerMode: "none"
    });

var AuthStack = /* module */[
  /* routes */routes,
  /* navigator */$$navigator
];

var routes$1 = {
  Dashboard: Dashboard.make,
  Accounts: Accounts.make
};

var $$navigator$1 = ReactNavigation.createBottomTabNavigator(routes$1);

var AppStack = /* module */[
  /* routes */routes$1,
  /* navigator */$$navigator$1
];

var $$navigator$2 = ReactNavigation.createSwitchNavigator({
      App: $$navigator$1,
      Auth: $$navigator,
      AuthLoading: AuthLoading.make
    }, {
      initialRouteName: "AuthLoading"
    });

var SumiAppContainer = AppContainer$ReactNavigation.Make(/* module */[/* navigator */$$navigator$2]);

export {
  AuthStack ,
  AppStack ,
  SumiAppContainer ,
  
}
/* navigator Not a pure module */
