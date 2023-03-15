//import { ethers } from "ethers";
const { ethereum } = window;
import Web3 from "web3";
console.log(Web3)
console.log(ethereum)
const btn1 = document.querySelector("#btn1");

const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log(accounts)
      if (accounts.length) {
        //setCurrentAccount(accounts[0]);
        window.web3= new Web3(ethereum);
        console.log(window.web3);
        
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }

  };
  btn1.addEventListener("click", checkIfWalletIsConnect);