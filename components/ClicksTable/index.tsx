import { useEffect, useState } from 'react'
import styles from '../../styles/Table.module.css'


type Click = { clicker: string, txHash: string; blockNumber: number; clickIndex: string }


const formatStr = (str: string) => `${str.slice(0, 6)}...${str.slice(38, 43)}`
// const formatStr = (str: string) => str
const processClicks = (clicks: Array<Click>, account) => {
    return (
        <tbody>
            {
                clicks.map((click: Click, index: number) => {
                    return <tr key={click.clickIndex} className={styles.tr}>
                        <td>{index+1}</td>
                        <td><a href={`https://explorer.harmony.one/#/address/${click.txHash}`} target="_blank">{formatStr(click.clicker)}</a>{account === click.clicker && <span style={{ color: 'red', fontStyle:'italic', fontWeight: 'bold'}}> (you)</span>}</td>
                        <td><a href={`https://explorer.harmony.one/#/tx/${click.txHash}`} target="_blank">{formatStr(click.txHash)}</a></td>
                        <td>{click.blockNumber}</td>
                    </tr>
                })
            }
        </tbody>
    )
}

const ClicksTable = ({ clicks, account }: {clicks: Array<Click>, account: string}) => {
    return clicks.length > 0 ? (
        
        <table className={styles.table}>
            <thead>
                <tr>
                    <th></th>
                    <th>Account</th>
                    <th>txHash</th>
                    <th>Block</th>
                </tr>
            </thead>
            {
                processClicks(clicks.reverse(), account)
            }
        </table>
    ) : (
        <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2rem' }}>Loading... </p>
    )
}

export default ClicksTable;
