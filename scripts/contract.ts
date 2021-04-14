import OneClick from '../compiled/OneClick.json'
import * as ethers from 'ethers';
import config from '../config'

async function getSigner(){
    const provider = new ethers.providers.JsonRpcProvider(config.nodeURL)
    const wallet = ethers.Wallet.fromMnemonic(config.mnemonic).connect(provider)
    return wallet
}

async function deployOneClick(){
    const _oneClick = new ethers.ContractFactory(OneClick.abi, OneClick.bytecode, await getSigner())
    const oneClick = await _oneClick.deploy(config.forwarder)
    await oneClick.deployed()
    console.log(oneClick.address)
    console.log(await oneClick.owner())
    // oneClick.setForwarder(config.forwarder)
}

(async () => {
    await deployOneClick()
})()