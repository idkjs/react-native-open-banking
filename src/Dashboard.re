open ReactNative;

[@react.component]
let make = (~navigation) => {
  let (auth, _) = React.useContext(Auth.context).Auth.auth;
  let user = auth->Auth.currentUserOrRaise;

  <View style=GlobalStyles.styles##container>
    <Text> ("Welcome to the dashboard " ++ user.name)->React.string </Text>
    <Button onPress={_ => Auth.logOut(~navigation)} title="Sign Out" />
  </View>;
};
