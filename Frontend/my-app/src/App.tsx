import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from "./component/redux/index";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Link,
  useParams,
  Routes,
} from "react-router-dom";
import Login from "./component/login/login";
import Register from "./component/login/register";
import { useState } from "react";
import "antd/dist/antd.css";
import Home from "./component/home/home";
const store = createStore(RootReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
