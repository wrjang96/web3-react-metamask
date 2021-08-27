import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { ERC_20ABI, ROUTER_ABI } from '../constant'
import { ethers } from 'ethers'

function RemoveLiquidityETH(){
    const { account, library } = useWeb3React()
    const signer = library?.getSigner(account).connectUnchecked()
    const routerContract = new ethers.Contract("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",ROUTER_ABI,signer)
    // AddLiquidityETH 그대로 uniswapv2Router 주소
    const onClick = () => {
        // 0.002 UNI-V2의 liquidity를 제거하고 싶음 
        routerContract.removeLiquidityETH(
            "0xad6d458402f60fd3bd25163575031acdce07538d", 
            // https://ropsten.etherscan.io/token/0xad6d458402f60fd3bd25163575031acdce07538d?a=0xe74a0d2c3a38bdfcf667a38425387567ea872384
            // 통해 얻은 DAI의 주소 
            ethers.utils.parseEther("0.001"),
            // 삭제할 liquidity token의 양 
            '0',
            '0', 
            '0xE74A0D2C3A38bdFCF667a38425387567Ea872384',  
            //내 주소 
            Math.floor(Date.now() / 1000) + 60 * 20,
            {gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")}
        ).then(result => console.log(result))
    }
    function approve() {
        const pairTokenContract = new ethers.Contract('0x1c5DEe94a34D795f9EEeF830B68B80e44868d316',ERC_20ABI,signer)
        pairTokenContract.approve("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", ethers.utils.parseEther('10000')) 
    }
    return ( 
        <div>
        <button onClick = {approve}> 
            approve_liquidity_token 
        </button>
        <button onClick = {onClick}> 
            Remove Liquidity ETH 
        </button>
        </div>
    )

}

export default RemoveLiquidityETH