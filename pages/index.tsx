import { useEffect, useState } from "react"
import Head from 'next/head'
import OneClick from '../scripts/ethereum'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/Home.module.css'
import ClicksTable from "../components/ClicksTable"


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
                            connected && <p className="text-center text-sm mb-2 md:text-xl">Connected: {account}</p>
                        }
                        <div className="flex justify-center">
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

const formatAddress = (address: string) => `${address.slice(0,7)}...${address.slice(address.length-7,address.length)}`


