export const texTokenAddress = "0x64f389CD4bB2ce03EB1F192548F8E91903406f18";

export const texTokenAbi = [
  {
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]