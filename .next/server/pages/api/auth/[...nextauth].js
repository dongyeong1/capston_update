module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/line */ \"next-auth/providers/line\");\n/* harmony import */ var next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2___default()({\n    clientId: process.env.LINE_CLIENT_ID,\n    clientSecret: process.env.LINE_CLIENT_SECRET,\n    disable_auto_login: false\n  }), next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n    authorization: {\n      params: {\n        prompt: \"consent\",\n        access_type: \"offline\",\n        response_type: \"code\"\n      }\n    }\n  })],\n  jwt: {\n    encryption: true\n  },\n  secret: process.env.SECRET,\n  callbacks: {\n    async jwt({\n      token,\n      user,\n      account,\n      profile\n    }) {\n      if (account !== null && account !== void 0 && account.accessToken) {\n        token.accessToken = account.accessToken;\n      }\n\n      return token;\n    },\n\n    async redirect({\n      url,\n      _baseUrl\n    }) {\n      if (url === \"/dashboard\") {\n        return Promise.resolve(\"/\");\n      }\n\n      return Promise.resolve(\"/\");\n    },\n\n    async session({\n      session,\n      token,\n      user\n    }) {\n      session.accessToken = token.accessToken;\n      return session;\n    },\n\n    async signIn({\n      user,\n      account,\n      profile,\n      email\n    }) {\n      const isAllowedToSignIn = true;\n\n      if (isAllowedToSignIn) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJMaW5lUHJvdmlkZXIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJMSU5FX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkxJTkVfQ0xJRU5UX1NFQ1JFVCIsImRpc2FibGVfYXV0b19sb2dpbiIsIkdvb2dsZVByb3ZpZGVyIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsImp3dCIsImVuY3J5cHRpb24iLCJzZWNyZXQiLCJTRUNSRVQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwicmVkaXJlY3QiLCJ1cmwiLCJfYmFzZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vzc2lvbiIsInNpZ25JbiIsImVtYWlsIiwiaXNBbGxvd2VkVG9TaWduSW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWVBLCtHQUFRLENBQUM7QUFDdEJDLFdBQVMsRUFBRSxDQUNUQywrREFBWSxDQUFDO0FBQ1hDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBRFg7QUFFWEMsZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGtCQUZmO0FBR1hDLHNCQUFrQixFQUFFO0FBSFQsR0FBRCxDQURILEVBTVRDLGlFQUFjLENBQUM7QUFDYlAsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sZ0JBRFQ7QUFFYkosZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlPLG9CQUZiO0FBR2JDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBQ05DLGNBQU0sRUFBRSxTQURGO0FBRU5DLG1CQUFXLEVBQUUsU0FGUDtBQUdOQyxxQkFBYSxFQUFFO0FBSFQ7QUFESztBQUhGLEdBQUQsQ0FOTCxDQURXO0FBbUJ0QkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURULEdBbkJpQjtBQXNCdEJDLFFBQU0sRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsTUF0QkU7QUF1QnRCQyxXQUFTLEVBQUU7QUFDVCxVQUFNSixHQUFOLENBQVU7QUFBRUssV0FBRjtBQUFTQyxVQUFUO0FBQWVDLGFBQWY7QUFBd0JDO0FBQXhCLEtBQVYsRUFBNkM7QUFDM0MsVUFBSUQsT0FBSixhQUFJQSxPQUFKLGVBQUlBLE9BQU8sQ0FBRUUsV0FBYixFQUEwQjtBQUN4QkosYUFBSyxDQUFDSSxXQUFOLEdBQW9CRixPQUFPLENBQUNFLFdBQTVCO0FBQ0Q7O0FBQ0QsYUFBT0osS0FBUDtBQUNELEtBTlE7O0FBT1QsVUFBTUssUUFBTixDQUFlO0FBQUVDLFNBQUY7QUFBT0M7QUFBUCxLQUFmLEVBQWtDO0FBQ2hDLFVBQUlELEdBQUcsS0FBSyxZQUFaLEVBQTBCO0FBQ3hCLGVBQU9FLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixHQUFoQixDQUFQO0FBQ0Q7O0FBQ0QsYUFBT0QsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEdBQWhCLENBQVA7QUFDRCxLQVpROztBQWFULFVBQU1DLE9BQU4sQ0FBYztBQUFFQSxhQUFGO0FBQVdWLFdBQVg7QUFBa0JDO0FBQWxCLEtBQWQsRUFBd0M7QUFDdENTLGFBQU8sQ0FBQ04sV0FBUixHQUFzQkosS0FBSyxDQUFDSSxXQUE1QjtBQUNBLGFBQU9NLE9BQVA7QUFDRCxLQWhCUTs7QUFpQlQsVUFBTUMsTUFBTixDQUFhO0FBQUVWLFVBQUY7QUFBUUMsYUFBUjtBQUFpQkMsYUFBakI7QUFBMEJTO0FBQTFCLEtBQWIsRUFBZ0Q7QUFDOUMsWUFBTUMsaUJBQWlCLEdBQUcsSUFBMUI7O0FBQ0EsVUFBSUEsaUJBQUosRUFBdUI7QUFDckIsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUF4QlE7QUF2QlcsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IExpbmVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9saW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgTGluZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5MSU5FX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTElORV9DTElFTlRfU0VDUkVULFxuICAgICAgZGlzYWJsZV9hdXRvX2xvZ2luOiBmYWxzZSxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHByb21wdDogXCJjb25zZW50XCIsXG4gICAgICAgICAgYWNjZXNzX3R5cGU6IFwib2ZmbGluZVwiLFxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgand0OiB7XG4gICAgZW5jcnlwdGlvbjogdHJ1ZSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH0pIHtcbiAgICAgIGlmIChhY2NvdW50Py5hY2Nlc3NUb2tlbikge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzVG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgX2Jhc2VVcmwgfSkge1xuICAgICAgaWYgKHVybCA9PT0gXCIvZGFzaGJvYXJkXCIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcIi9cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiL1wiKTtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGVtYWlsIH0pIHtcbiAgICAgIGNvbnN0IGlzQWxsb3dlZFRvU2lnbkluID0gdHJ1ZTtcbiAgICAgIGlmIChpc0FsbG93ZWRUb1NpZ25Jbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers/google\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiPzUwNzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers/google\n");

/***/ }),

/***/ "next-auth/providers/line":
/*!*******************************************!*\
  !*** external "next-auth/providers/line" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers/line\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2xpbmVcIj85NDg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC9wcm92aWRlcnMvbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnMvbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers/line\n");

/***/ })

/******/ });