import { useEffect, useState } from "react"
import { Contract, ethers } from 'ethers'
import oneClickCompiled from '../compiled/OneClick.json'
const GSN = require('@opengsn/gsn')

class OneClick {
  paymasterAddress = '0x944Eef4A4D35502363CBEBc904f145B9C58909e2' // deployed paymaster address
  oneClickContractAddress = "0x04CCe397176F2Dd4075a12Fe158f0135868aaFFb"
  provider = new ethers.providers.JsonRpcProvider('https://api.s0.t.hmny.io')
  signer = null
  ethereum = null
  OneClickContract = null
  harmonChainId = 1666600000
  account = ''
  isHarmony = false

  async loadOneClick({ toast, setClicks }) {
    this.isHarmony = await this.getNetwork()

    if(!this.isHarmony) {
      toast('Please switch to Harmony ONE network to continue using OneClick')
    }
    
    this.OneClickContract = new ethers.Contract(this.oneClickContractAddress, oneClickCompiled.abi)

    await this.reloadClicks({ setClicks })
  }

  async ConnectGSN({ toast, setConnected, setAccount }) {
    const isHarmony = await this.getNetwork()
    if(!isHarmony) {
      toast('Please switch to harmony ONE network to use OneClick')
      return
    }
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
      this.account = accounts[0]
      const __gsnProvider = await GSN.RelayProvider.newProvider({
          provider: window.ethereum,
          config: {
              paymasterAddress: this.paymasterAddress
          },
      }).init();
      this.provider = new ethers.providers.Web3Provider(__gsnProvider)
      console.log( this.provider )

      this.signer = this.provider.getSigner(this.account)

      console.log(this.signer)
      setConnected(true)
      setAccount(this.account)

    }catch(e) {
      console.log(e)
    }
    
  }

  async addClick({ setClicks }) {
    try{
      const tx = await this.OneClickContract.connect(this.signer).click()
      console.log(tx.hash)
      await this.reloadClicks({ setClicks })
    } catch(e) {
      console.log(e)
    }
  }

  async getNetwork () {
    const { ethereum } = window
    this.ethereum = ethereum

    const provider = new ethers.providers.Web3Provider(ethereum)

    const { chainId } = await provider.getNetwork()

    if(chainId !== this.harmonChainId) {
      console.warn('Invalid chain Id detected')
      return false
    }
    return true
  }

  async reloadClicks({ setClicks }) {
    const filter = this.OneClickContract.filters.Click(null)
    const latestBlock = await this.provider.getBlockNumber()
    const _clicks = await this.OneClickContract.connect(this.provider).queryFilter(filter, latestBlock - 200_000)
    const clicks = _clicks.map(click => ({clicker: click.args[0].toString(), clickIndex: click.args[1].toString(), blockNumber: click.blockNumber, txHash: click.transactionHash}))
    setClicks(clicks)
  }

}

export default new OneClick()