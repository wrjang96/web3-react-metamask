import React from "react";
import { useWeb3React } from "@web3-react/core";
import { COUNTER_ABI } from "../constant";
import {ethers} from "ethers"

function DecButton(){
    const {account, library} = useWeb3React()
    const signer = library?.getSigner(account).connectUnchecked()
    const onClick = () => {
        const counterContract = new ethers.Contract(
            '0x9acDeC484dFD452ce56bb666A432916702fB2F0E',
            COUNTER_ABI,
            signer
        )
        counterContract.dec({gasLimit:1000000})
        .then(result => console.log(result))
    }
    return (
        <div>
            <button onClick = {onClick}>
                Decrease
            </button>
        </div>
    )
}

export default DecButton