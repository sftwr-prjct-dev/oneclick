import { useEffect, useState } from "react"
import { Contract, ethers } from 'ethers'
import oneClickCompiled from '../compiled/OneClick.json'
const GSN = require('@opengsn/gsn')

// const paymasterAddress = '0xfeF1fFc4aa52f50AbFf04316253e8e127c08b39F' // deployed paymaster address
// const oneClickContractAddress = "0x716FFcB70043A48FBc049D51044d298D465612B9"
// const nodeURL = "https://api.s0.b.hmny.io"

const paymasterAddress = '0x944Eef4A4D35502363CBEBc904f145B9C58909e2' // deployed paymaster address
const oneClickContractAddress = "0xe3550388D6c84381B9B55f2b9a35A7649f609077"
const nodeURL = "https://api.s0.t.hmny.io"

export default function Home() {
    const [gsnProvider, setGsnProvider] = useState(null)
    const [oneClickContract, setOneClickContract] = useState(null)
    const [account, setAccount] = useState("")
    const [clicks, setClicks] = useState([])
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
        const provider = new ethers.providers.JsonRpcProvider(nodeURL);
        (async () => {
            const OneClickContract = new Contract(oneClickContractAddress, oneClickCompiled.abi)
            setOneClickContract(OneClickContract)
            const filter = OneClickContract.filters.Click(null)
            const latestBlock = await provider.getBlockNumber()
            const _clicks = await OneClickContract.connect(provider).queryFilter(filter, latestBlock - 200_000)
            const clicks = _clicks.map(click => ({clicker: click.args[0].toString(), clickIndex: click.args[1].toString(), blockNumber: click.blockNumber, txHash: click.transactionHash}))
            setClicks(clicks)
        })()
    },[])

    const handleClick = async () => {
        if(gsnProvider){
            console.log(gsnProvider)
            const gsnSigner = await gsnProvider.getSigner(account)
            const tx = await oneClickContract.connect(gsnSigner).click()
            console.log(tx.hash)
        }
        
    }

    return (
        <div className="w-full h-screen flex flex-wrap items-center justify-center">
            <div className="w-full">Your address: {account}</div>
            <button className="" onClick={handleClick}>Add Click</button>
            <div className="w-full mt-20">
                {
                    clicks.map(click => {
                        return <div key={click.txHash}>Clicker: {click.clicker}, Click Index: {click.clickIndex}, Click block number: {click.blockNumber}</div>
                    })
                }
            </div>
            
        </div>
    )
}


