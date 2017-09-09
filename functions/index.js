"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWord = undefined;

var _firebaseFunctions = require("firebase-functions");

var functions = _interopRequireWildcard(_firebaseFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

var helloWord = exports.helloWord = functions.https.onRequest(function (req, res) {
  var world = "from Es6 in Cloud Functions!";
  res.status(200).send("Hello " + world);
});