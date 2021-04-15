import { useEffect, useState } from "react"
import { Contract, ethers } from 'ethers'
import oneClickCompiled from '../compiled/OneClick.json'
const GSN = require('@opengsn/gsn')

// const paymasterAddress = '0xfeF1fFc4aa52f50AbFf04316253e8e127c08b39F' // deployed paymaster address
// const oneClickContractAddress = "0x716FFcB70043A48FBc049D51044d298D465612B9"
// const nodeURL = "https://api.s0.b.hmny.io"

const paymasterAddress = '0x944Eef4A4D35502363CBEBc904f145B9C58909e2' // deployed paymaster address
const oneClickContractAddress = "0x04CCe397176F2Dd4075a12Fe158f0135868aaFFb"
const nodeURL = "https://api.s0.t.hmny.io"

export default function Home() {
    const [gsnProvider, setGsnProvider] = useState(null)
    const [oneClickContract, setOneClickContract] = useState(null)
    const [account, setAccount] = useState("")
    const [clicks, setClicks] = useState([])
    const [reload, setReload] = useState(0)
    const [loadingEv, setLoadingEv] = useState(false)
    useEffect(() => {
        (async () => {
            if(window.ethereum){
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
                const __gsnProvider = await GSN.RelayProvider.newProvider({
                    provider: window.ethereum,
                    config: {
                        paymasterAddress,
                        // preferredRelays: ['https://hmny.prjct.dev']
                    },
                }).init();
                const _gsnProvider = new ethers.providers.Web3Provider(__gsnProvider)
                setGsnProvider(_gsnProvider)
                setAccount(accounts[0])
            }
        })()
    }, [])

    useEffect(() => {
        if(window.ethereum){
            window.ethereum.on('accountsChanged', (accounts)=>{
                if(accounts.length === 0){
                    //
                }else {
                    if(accounts[0] !== account){
                        setAccount(accounts[0])
                    }
                }
            });
        }
    },[])

    useEffect(() => {
        
        const provider = new ethers.providers.JsonRpcProvider(nodeURL);
        (async () => {
            try {
                setLoadingEv(true)
                const OneClickContract = new Contract(oneClickContractAddress, oneClickCompiled.abi)
                setOneClickContract(OneClickContract)
                const filter = OneClickContract.filters.Click(null)
                const latestBlock = await provider.getBlockNumber()
                const _clicks = await OneClickContract.connect(provider).queryFilter(filter, latestBlock - 200_000)
                const clicks = _clicks.map(click => ({clicker: click.args[0].toString(), clickIndex: click.args[1].toString(), blockNumber: click.blockNumber, txHash: click.transactionHash}))
                setClicks(clicks.reverse())
            } catch (error) {
                // handle error
            }finally{
                setLoadingEv(false)
            }            
        })()
    },[reload])

    const handleClick = async () => {
        if(gsnProvider){
            try {
                const gsnSigner = await gsnProvider.getSigner(account)
                const tx = await oneClickContract.connect(gsnSigner).click()
                console.log(tx.hash)
            } catch (error) {
                if(error.data){
                    alert(error.data.message)
                }else{
                    alert(error.message)
                }
                // _reload--
            }finally{
                setReload(reload+1)
            }
        }
        
    }

    const isLoading = loadingEv && clicks.length === 0

    return (
        <div className="w-full h-screen md:flex flex-wrap items-center justify-center">
            <div className="bg-blue-300 w-full md:w-500 h-full md:h-650 py-8 px-6 rounded-lg">
                <div className="w-full text-white text-lg">Your address: {formatAddress(account)}</div>
                <div className="w-full text-center mt-16">
                    <button className=" w-64 bg-blue-600 text-gray-300 h-16 rounded-md outline-none focus:outline-none border-none" onClick={handleClick}>Add Click</button>
                </div>
                <div className={`w-full mt-16 h-350 overflow-y-scroll ${isLoading && "flex justify-center items-center"}`}>
                    {
                        isLoading
                            ? <div className="w-full text-5xl text-center text-white">Loading ...</div>
                            : (clicks).map(click => {
                                return <div className={`py-2 leading-6 ${click.clicker.toLowerCase()===account.toLowerCase() ? 'text-gray-600' : 'text-gray-900'}`} key={click.txHash}>
                                    Clicker: {formatAddress(click.clicker)}, Click Index: {click.clickIndex}, Click block number: {click.blockNumber}
                                </div>
                            })

                    }
                </div>
            </div>            
        </div>
    )
}

const formatAddress = (address: string) => `${address.slice(0,7)}...${address.slice(address.length-7,address.length)}`


