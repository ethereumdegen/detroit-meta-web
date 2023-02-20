


import { ethers } from "ethers";
import { parseInt } from 'lodash';
import { useState } from "react";
import { atom, useRecoilState } from "recoil";

const POLLING_INTERVAL = 12000;
//const RPC_URL = process.env.VUE_APP_RPC_URL;

import { makeObservable, observable, action } from "mobx"

 

export class Web3Store {
     
    account=undefined
    active=false
    balance=0
    chainId=undefined 
  
    constructor() {
 
      
        makeObservable(this, {
            account: observable,
            active: observable,
            balance: observable,
            connect: action,
            disconnect: action,
            registerCallbacks: action 
        })
        
    }
 
    async connect() {

      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
          // Prompt user for account connections
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", await signer.getAddress());
      let account = await signer.getAddress()

      let balance = await signer.getBalance()
      let balanceFormatted = ethers.utils.formatEther(balance)

      const { chainId } = await provider.getNetwork()

      this.account = account 
      this.balance = balance 
      this.active = true 
      this.chainId = chainId

      this.registerCallbacks()

    }

    async disconnect() {

      this.account = undefined
      this.active = false 
      this.balance = 0 

    }


    //these dont work properly like this w strict mode ...
    registerCallbacks(){

      window.ethereum.on('connect', ({chainId}) => {
        this.chainId = chainId
      });

      window.ethereum.on('chainChanged', (chainId) => {
        this.chainId = chainId
      });

      window.ethereum.on('accountsChanged', (accounts) => {
        this.account = accounts[0]
      });

    }

}
 

export function getNetworkNameFromChainId(chainId){

  switch(chainId){
    case 1: return 'mainnet'
    case 4: return 'rinkeby'
    case 5: return 'goerli'

    default: return 'unknown'
  }

}