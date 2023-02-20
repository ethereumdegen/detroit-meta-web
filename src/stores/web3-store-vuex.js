import web3 from 'web3'
import {ethers} from "ethers";
import {parseInt} from 'lodash'

//convert me to redux toolkit 

 
const POLLING_INTERVAL = 12000
const RPC_URL = process.env.VUE_APP_RPC_URL
export const getLibrary = () => {
    const httpProvider = new web3.providers.HttpProvider(RPC_URL)
    const web3NoAccount = new ethers.providers.Web3Provider(httpProvider)
    web3NoAccount.pollingInterval = POLLING_INTERVAL;
    return web3NoAccount
}


export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

const paramsToPersist = []

const web3Storage = {
    state: {
        web3Modal: null,

        library: getLibrary(),
        active: false,
        account: null,
        chainId: 0,
        contract: null,
        contractAddress: null,
        signer: null,
        abi: null,
        balance: 0,
        web3error: null 
 
    },
    getters: {
        activeAccount (state) {
          return state.account
        }
    },
    mutations: {
        setInjectedEthereum(state, injectedEthereum) {
            console.log('set inj', injectedEthereum)
            state.injectedEthereum = injectedEthereum
        },
        setLibrary(state, library) {
            state.library = library
        },
      
        setActive(state, active) {
            console.log('set active',active)
            state.active = active
        },
        setWeb3Error(state, message) {
            state.web3error = message
        },
        setAccount(state, account) {
            console.log('set account',account)
            if (account) {
                state.account = account.toLowerCase()
            }
        },
        setChainId(state, chainId) {

            console.log("chainChanged", chainId)
            state.chainId = chainId
        },

        setEthBalance(state, balance) {
            state.balance = balance
        },

        setSigner(state, signer) {
            state.signer = signer
        },

       

        async setContract(state, {abi, contractAddress}) {
          
            const signer = state.signer;
            const contract = new ethers.Contract(contractAddress, abi, signer);
            state.contract = contract
        },

        initWeb3Storage(state) {   
            
         

          for(let varName of paramsToPersist){
              if (localStorage.getItem(varName)) {
             
                  state[varName] = localStorage.getItem(varName);
                  console.log(`loading ${varName} `, state[varName])
               }
          }
 
        }
       
    },
    actions: {

      

 

        async connect({state, commit, dispatch}) {
           
  
            console.log('state.injectedEthereum',state.injectedEthereum)

           
           

            const provider = new ethers.providers.Web3Provider(state.injectedEthereum)
 
            const accounts = await state.injectedEthereum.request(
                {method:"eth_requestAccounts"}
            );
            
            const signer = provider.getSigner()
            
            commit('setSigner', signer)

            provider.pollingInterval = 12000
            commit('setLibrary', provider)

            
             
            if (accounts.length > 0) {
                commit('setAccount', accounts[0])

            }

            console.log('first account',accounts[0])

           


            const network = await provider.getNetwork()
            commit('setChainId', network.chainId)
            commit('setActive', true)

            try{
                const balance = await provider.getBalance(accounts[0]);
                commit('setEthBalance', balance)
                console.log('setEthBalance', balance)
            }catch(e){
                console.error(e)
            }
    
    

            state.injectedEthereum.on("connect", async (info) => {
                let chainId = parseInt(info.chainId)
                commit('setChainId', chainId)
                console.log("connect", info)
            });

            state.injectedEthereum.on("accountsChanged", async (accounts) => {
                if (accounts.length > 0) {
                    commit('setAccount', accounts[0])
                } else {
                    await dispatch('resetApp')
                }
            });
            state.injectedEthereum.on("chainChanged", async (chainId) => {
                chainId = parseInt(chainId)
                commit('setChainId', chainId)
            });

        },
        async disconnect({state, commit}) {

            console.log('disconnect web3')
            /*try {
                await state.injectedEthereum.clearCachedProvider();
            } catch (error) {
                console.error(error)
            }*/
            commit('setAccount', null)
            commit('setActive', false)
            commit('setLibrary', getLibrary())
        },
    }
}

export default web3Storage;