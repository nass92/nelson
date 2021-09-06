import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './style/index.scss';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dapp from './Dapp';
import reportWebVitals from "./reportWebVitals";
import { Web3Provider } from "web3-hooks";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider >
      <Web3Provider >
        <Router>
          <Dapp />
        </Router>
      </Web3Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();