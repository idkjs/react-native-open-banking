// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Auth from "../Context/Auth.bs.js";
import * as List from "bs-platform/lib/es6/list.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Fetch from "bs-fetch/src/Fetch.js";
import * as Consents from "./Consents.bs.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Json_encode from "@glennsl/bs-json/src/Json_encode.bs.js";
import * as Caml_exceptions from "bs-platform/lib/es6/caml_exceptions.js";

function decodeMedia(json) {
  return /* record */[
          /* source */Json_decode.field("source", Json_decode.string, json),
          /* type_ */Json_decode.field("type", Json_decode.string, json)
        ];
}

function decodeInstitution(json) {
  return /* record */[
          /* status : Unauthorized */1,
          /* id */Json_decode.field("id", Json_decode.string, json),
          /* name */Json_decode.field("name", Json_decode.string, json),
          /* fullName */Json_decode.field("fullName", Json_decode.string, json),
          /* media */Json_decode.field("media", (function (param) {
                  return Json_decode.list(decodeMedia, param);
                }), json),
          /* features */Json_decode.field("features", (function (param) {
                  return Json_decode.map((function (arr) {
                                return Belt_List.keepMap(arr, (function (x) {
                                              return x;
                                            }));
                              }), (function (param) {
                                return Json_decode.list((function (param) {
                                              return Json_decode.optional(Json_decode.string, param);
                                            }), param);
                              }), param);
                }), json)
        ];
}

function decodeInstitutions(json) {
  return Json_decode.field("institutions", (function (param) {
                return Json_decode.array(decodeInstitution, param);
              }), json);
}

function institutionsRequest(authToken) {
  return fetch("http://localhost:8080/api/institutions", Fetch.RequestInit[/* make */0](/* Get */0, {
                    "Content-Type": "application/json",
                    "x-auth-token": authToken
                  }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0));
}

var RetrieveTokenError = Caml_exceptions.create("Institutions.RetrieveTokenError");

function getList(param) {
  return Auth.getAuthToken(/* () */0).then(institutionsRequest).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve(decodeInstitutions(json));
              }));
}

function authoriseRequest(authToken, userUuid, institutionId) {
  var payload = JSON.stringify(Json_encode.object_(/* :: */[
            /* tuple */[
              "userUuid",
              userUuid
            ],
            /* :: */[
              /* tuple */[
                "institutionId",
                institutionId
              ],
              /* :: */[
                /* tuple */[
                  "callback",
                  "http://localhost:8080"
                ],
                /* [] */0
              ]
            ]
          ]));
  console.log(payload);
  return fetch("http://localhost:8080/api/institutions/authorize", Fetch.RequestInit[/* make */0](/* Post */2, {
                    "Content-Type": "application/json",
                    "x-auth-token": authToken
                  }, Caml_option.some(payload), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0));
}

function authorise(userUuid, institutionId) {
  return Auth.getAuthToken(/* () */0).then((function (param) {
                    return authoriseRequest(param, userUuid, institutionId);
                  })).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve(Json_decode.field("authorisationUrl", Json_decode.string, json));
              }));
}

function getAuthInstitutes(param) {
  return Promise.all(/* tuple */[
                getList(/* () */0),
                Consents.get(/* () */0)
              ]).then((function (param) {
                var consents = param[1];
                console.log(consents);
                return Promise.resolve($$Array.map((function (i) {
                                  return List.map((function (p) {
                                                console.log(p);
                                                return /* () */0;
                                              }), consents);
                                }), param[0]));
              }));
}

export {
  decodeMedia ,
  decodeInstitution ,
  decodeInstitutions ,
  institutionsRequest ,
  RetrieveTokenError ,
  getList ,
  authoriseRequest ,
  authorise ,
  getAuthInstitutes ,
  
}
/* Auth Not a pure module */
