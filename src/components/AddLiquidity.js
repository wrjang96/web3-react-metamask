import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { ROUTER_ABI } from '../constant'
import { ethers } from 'ethers'

function AddLiquidity(){
    const { account, library } = useWeb3React()

    const signer = library?.getSigner(account).connectUnchecked()
    const routerContract = new ethers.Contract("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",ROUTER_ABI,signer)
    
    // uniswapv2router주소
    const onClick = () => {
        routerContract.addLiquidity(
            '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
            '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
            ethers.utils.parseEther("0.00000000005"),
            '0','0', 
            '0xE74A0D2C3A38bdFCF667a38425387567Ea872384', 
            Math.floor(Date.now() / 1000) + 60 * 20,
            {value:ethers.utils.parseEther("0.01"),gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")}

        ).then(result => console.log(result))

    }
    return (
        <div>
        <button onClick = {onClick}> 
            Add Liquidity
        </button>
        </div>
    )

}

export default AddLiquidity