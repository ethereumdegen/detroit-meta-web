


import { ethers } from "ethers";
import { parseInt } from 'lodash';
import { useState } from "react";
import { atom, useRecoilState } from "recoil";

const POLLING_INTERVAL = 12000;
//const RPC_URL = process.env.VUE_APP_RPC_URL;

export const web3LibraryAtom = atom({
    key: 'web3Library',
    default: {

        account:undefined,
       // signer:undefined,
        active:false,
        balance: 0 

    },
});


export async function connectLocalProvider() {

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Account:", await signer.getAddress());
        let account = await signer.getAddress()

        let balance = await signer.getBalance()
        let balanceFormatted = ethers.utils.formatEther(balance)

        return {
            provider, 
            account,
            balance
        }    
  }


export async function disconnectLocalProvider() {

   ///how to do this ?  Just set active to false .  
   

   
}



export async function registerCallbackOnConnect( callback ) {

  window.ethereum.on('connect', (info) => {
    callback(info)
  });

}

 

export async function registerCallbackOnChainChanged( callback ) {

  window.ethereum.on('chainChanged', (chainId) => {
    callback(chainId)
  });

}



export async function registerCallbackOnAccountsChanged( callback ) {

  window.ethereum.on('accountsChanged', (acct) => {
    callback(acct)
  });

}



/*

ethereum.on('chainChanged', (chainId) => {
   
});

ethereum.on('accountsChanged', (chainId) => {
   
});
 


*/


/* 



import web3 from 'web3';
import { ethers } from "ethers";
import { parseInt } from 'lodash';
import { atom, useRecoilState } from 'recoil';

const POLLING_INTERVAL = 12000;
const RPC_URL = process.env.VUE_APP_RPC_URL;

export const web3Library = atom({
  key: 'web3Library',
  default: getLibrary(),
});

function getLibrary() {
  const httpProvider = new web3.providers.HttpProvider(RPC_URL);
  const web3NoAccount = new ethers.providers.Web3Provider(httpProvider);
  web3NoAccount.pollingInterval = POLLING_INTERVAL;
  return web3NoAccount;
}

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL);

const paramsToPersist = [];

function useWeb3Storage() {
  const [web3Modal, setWeb3Modal] = useRecoilState(web3Library);
  const [active, setActive] = useRecoilState(web3Active);
  const [account, setAccount] = useRecoilState(web3Account);
  const [chainId, setChainId] = useRecoilState(web3ChainId);
  const [contract, setContract] = useRecoilState(web3Contract);
  const [contractAddress, setContractAddress] = useRecoilState(web3ContractAddress);
  const [signer, setSigner] = useRecoilState(web3Signer);
  const [abi, setAbi] = useRecoilState(web3Abi);
  const [balance, setBalance] = useRecoilState(web3Balance);
  const [web3error, setWeb3Error] = useRecoilState(web3Error);

  function setInjectedEthereum(injectedEthereum) {
    console.log('set inj', injectedEthereum);
    setWeb3Modal(injectedEthereum);
  }

  function setLibrary(library) {
    setWeb3Modal(library);
  }

  function setActive(active) {
    console.log('set active', active);
    setActive(active);
  }

  function setWeb3Error(message) {
    setWeb3Error(message);
  }

  function setAccount(account) {
    console.log('set account', account);
    if (account) {
      setAccount(account.toLowerCase());
    }
  }

  function setChainId(chainId) {
    console.log("chainChanged", chainId);
    setChainId(chainId);
  }

  function setEthBalance(balance) {
    setBalance(balance);
  }

  function setSigner(signer) {
    setSigner(signer);
  }

  async function setContract(abi, contractAddress) {
    const signer = state.signer;
    const contract = new ethers.Contract(contractAddress, abi, signer);
    setContract(contract);
  }

}


*/