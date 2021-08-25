import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { ROUTER_ABI } from '../constant'
import { ethers } from 'ethers'

function RemoveLiquidity(){

    const { account, library } = useWeb3React()

    const signer = library?.getSigner(account).connectUnchecked()
    const routerContract = new ethers.Contract("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",ROUTER_ABI,signer)
    
    // uniswapv2router주소
    const onClick = () => {
        routerContract.removeLiquidityETH(
            '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
            ethers.utils.parseEther("0.1"), 
            '0','0', '0xE74A0D2C3A38bdFCF667a38425387567Ea872384', 
            Math.floor(Date.now() / 1000) + 60 * 20,
            {value:ethers.utils.parseEther("0.01"),gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")}

        ).then(result => console.log(result))

    }
    return (
        <button onClick = {onClick}> 
            Remove Liquidity
        </button>
    )

}

export default RemoveLiquidity