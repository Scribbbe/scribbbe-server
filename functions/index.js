"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _firebaseFunctions = require("firebase-functions");

var _server = require("./graphql/server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphQLServer = (0, _server2.default)();

var api = exports.api = _firebaseFunctions.https.onRequest(graphQLServer);