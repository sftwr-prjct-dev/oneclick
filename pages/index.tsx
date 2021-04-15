import { useEffect, useState } from "react"
import Head from 'next/head'
import OneClick from '../scripts/ethereum'
import { ToastContainer, toast } from 'react-toastify'
const GSN = require('@opengsn/gsn')
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/Home.module.css'
import ClicksTable from "../components/ClicksTable"


// const paymasterAddress = '0xfeF1fFc4aa52f50AbFf04316253e8e127c08b39F' // deployed paymaster address
// const oneClickContractAddress = "0x716FFcB70043A48FBc049D51044d298D465612B9"
// const nodeURL = "https://api.s0.b.hmny.io"

// const paymasterAddress = '0x944Eef4A4D35502363CBEBc904f145B9C58909e2' // deployed paymaster address
// const oneClickContractAddress = "0x04CCe397176F2Dd4075a12Fe158f0135868aaFFb"
// const nodeURL = "https://api.s0.t.hmny.io"

export default function Home() {
    const [connected, setConnected] = useState(false)
    const [account, setAccount] = useState('')
    const [clicks, setClicks] = useState([])


    useEffect(()=> {
        OneClick.loadOneClick({ toast, setClicks })
    }, [])

    const handleClick = async () => {
        await OneClick.addClick({ setClicks, toast })
    }

    const connect = () => {
        OneClick.ConnectGSN({ toast, setConnected, setAccount })
    }

    return (
        <div className={styles.harmony}>
            <Head>
                <title>Harmony | OneClick</title>
                <link rel="icon" href="https://gblobscdn.gitbook.com/orgs%2F-LiOowK9lXTPyPxhkAcr%2Favatar.png?alt=media" />
            </Head>
            <div className={styles.connect}>
                    <>
                        {
                            connected && <p style={{textAlign: "center", fontSize: "larger", marginBottom: '0.5rem' }}>Connected: {account}</p>
                        }
                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                        {
                            connected ? <button className={styles.connectBtn} onClick={handleClick}>Add Click</button> :
                            <button className={styles.connectBtn} onClick={connect}>Connect</button>
                        }
                        </div>
                    </>
            </div>
           <main className={styles.main}>
            <ClicksTable clicks={clicks} account={account}/>
        </main>
            <ToastContainer />
        </div>
    )
}


