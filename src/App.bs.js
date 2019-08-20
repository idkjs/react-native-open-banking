// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as User from "./API/User.bs.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Utils from "./Utils.bs.js";
import * as React from "react";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as ReactNative from "react-native";
import * as Style$ReactNative from "reason-react-native/src/apis/Style.bs.js";

var styles = ReactNative.StyleSheet.create({
      container: {
        backgroundColor: "#F5FCFF",
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
      },
      textInput: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: "#CCCCCC",
        height: 50,
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        width: Style$ReactNative.pct(85)
      },
      errorText: {
        color: "#ff0033",
        marginTop: 15
      },
      submitButton: {
        backgroundColor: "#053CC8",
        marginTop: 25,
        width: Style$ReactNative.pct(75)
      }
    });

var initialState = /* record */[
  /* loginFields : record */[
    /* email */"",
    /* password */""
  ],
  /* loading */false,
  /* error */undefined
];

function signInError(optionalError) {
  if (optionalError !== undefined) {
    var error = optionalError;
    if (typeof error === "number") {
      switch (error) {
        case 0 : 
            return "Network is unreachable (Server is probably down?)";
        case 1 : 
            return "Wrong username / password combination";
        case 2 : 
            return "Email address is not valid";
        case 3 : 
            return "Email cannot be empty";
        case 4 : 
            return "Password cannot be empty";
        
      }
    } else {
      return error[0];
    }
  } else {
    return " ";
  }
}

function App$app(Props) {
  var ref = React.useRef(null);
  var match = React.useReducer((function (param, action) {
          var error = param[/* error */2];
          var loading = param[/* loading */1];
          var f = param[/* loginFields */0];
          switch (action.tag | 0) {
            case 0 : 
                return /* record */[
                        /* loginFields : record */[
                          /* email */action[0],
                          /* password */f[/* password */1]
                        ],
                        /* loading */loading,
                        /* error */error
                      ];
            case 1 : 
                return /* record */[
                        /* loginFields : record */[
                          /* email */f[/* email */0],
                          /* password */action[0]
                        ],
                        /* loading */loading,
                        /* error */error
                      ];
            case 2 : 
                return /* record */[
                        /* loginFields */f,
                        /* loading */action[0],
                        /* error */error
                      ];
            case 3 : 
                return /* record */[
                        /* loginFields */f,
                        /* loading */loading,
                        /* error */action[0]
                      ];
            
          }
        }), initialState);
  var dispatch = match[1];
  var match$1 = match[0];
  var match$2 = match$1[/* loginFields */0];
  var password = match$2[/* password */1];
  var email = match$2[/* email */0];
  var submitForm = function (param) {
    var match = $$String.trim(email);
    var match$1 = $$String.trim(password);
    var tmp;
    var exit = 0;
    if (match === "" && match$1 === "") {
      tmp = Promise.resolve(/* RequiredEmail */3);
    } else {
      exit = 1;
    }
    if (exit === 1) {
      tmp = match$1 === "" ? Promise.resolve(/* RequiredPassword */4) : User.Login[/* login */8](email, password).then((function (result) {
                var tmp;
                tmp = result.tag ? result[0] : undefined;
                return Promise.resolve(tmp);
              }));
    }
    tmp.then((function (msg) {
            return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [msg])));
          }));
    return /* () */0;
  };
  return React.createElement(ReactNative.View, {
              style: styles.container,
              children: null
            }, React.createElement(ReactNative.Text, {
                  children: "Sumi"
                }), React.createElement(ReactNative.TextInput, {
                  autoCapitalize: "none",
                  autoComplete: "email",
                  keyboardType: "email-address",
                  onChangeText: (function (text) {
                      return Curry._1(dispatch, /* SetEmail */Block.__(0, [text]));
                    }),
                  onSubmitEditing: (function (param) {
                      return Utils.focusRef(ref);
                    }),
                  placeholder: "Email",
                  returnKeyType: "next",
                  textContentType: "emailAddress",
                  value: email,
                  style: styles.textInput
                }), React.createElement(ReactNative.TextInput, {
                  ref: ref,
                  autoComplete: "password",
                  onChangeText: (function (text) {
                      return Curry._1(dispatch, /* SetPassword */Block.__(1, [text]));
                    }),
                  onSubmitEditing: (function (param) {
                      return submitForm(/* () */0);
                    }),
                  placeholder: "Password",
                  returnKeyType: "go",
                  secureTextEntry: true,
                  textContentType: "password",
                  value: password,
                  style: styles.textInput
                }), React.createElement(ReactNative.Text, {
                  style: styles.errorText,
                  children: signInError(match$1[/* error */2])
                }), React.createElement(ReactNative.View, {
                  style: styles.submitButton,
                  children: React.createElement(ReactNative.Button, {
                        accessibilityLabel: "Learn more about this purple button",
                        color: "#ffffff",
                        onPress: (function (param) {
                            return submitForm(/* () */0);
                          }),
                        title: "Sign In"
                      })
                }));
}

var app = App$app;

export {
  styles ,
  initialState ,
  signInError ,
  app ,
  
}
/* styles Not a pure module */
