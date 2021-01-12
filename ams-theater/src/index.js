import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import axios from "axios";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import Reducer from "./Store/reducers/reducer";
import navReducer from "./Store/reducers/navreducer";
import alert from "./Store/reducers/alert";
import auth from "./Store/reducers/auth";

import thunk from "redux-thunk";

/**
 * for the creation of the Root reducer and combine both of  the reducers in one
 */
const RootReducer = combineReducers({
  admin: navReducer,
  movieReducer: Reducer,
  alert,
  auth,
});

//to optimize the code use a common url,header,content type and intercepto
//to creacte a common base url instead of calling all the url
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

//to add a common interceptors
axios.interceptors.request.use(
  (requests) => {
    return requests;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const initialState = {};

const middleware = [thunk];

export const Store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
