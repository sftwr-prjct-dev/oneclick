

const addClick = async ({ OneClickI }) => {
    console.log(OneClickI)
    await OneClickI.addClick()
}

const OneClick = ({ OneClickI, connected }) => {
    console.log({ OneClickI, connected})
    return (
    
        <div>
            <button onClick={() => addClick({ OneClickI })}>Add Click</button>
        </div>
        
    )
}

export default OneClick