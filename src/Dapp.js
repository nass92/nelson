
import React from "react";
import App from "./App";
import { useContract } from "web3-hooks";
import { NelsonTokenAddress, NelsonTokenAbi } from "./contracts/NelsonToken";


export const DappContext = React.createContext(null);

function Dapp() {
  const TXT = useContract(NelsonTokenAddress, NelsonTokenAbi);

  return (
    <DappContext.Provider value={TXT}>
      <App />
    </DappContext.Provider>
  );
}

export default Dapp;