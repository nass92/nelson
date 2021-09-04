import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dapp from "./Dapp";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router
} from "react-router-dom";

import { Web3Provider } from "web3-hooks";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider >
      <Web3Provider>
        <Router>
          <Dapp />
        </Router>
      </Web3Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
