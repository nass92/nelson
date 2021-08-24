var ethers = require('ethers');
var url = 'https://rinkeby.infura.io/v3/d262d65a5d0a427d87a9d7fe5ce10130';
var provider = new ethers.providers.JsonRpcProvider(url);
var address = '0x64f389CD4bB2ce03EB1F192548F8E91903406f18';
var abi =
  [
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
  ];
var contract = new ethers.Contract(address, abi, provider);

contract.getHash().then((result) => {
  document.getElementById("btn").onclick = function () {
    location.href = "https://ipfs.io/ipfs/" + result;
  };
});