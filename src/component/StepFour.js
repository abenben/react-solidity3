import React, {useState} from'react'
//import {ethers} from 'ethers'

function StepFour(props) {
    const [val, setVal] = useState(null);
    const getCurrentVal = async () => {
        console.log("STEP 4.");
        console.log("contract.FUNCTION() to call function");
		let val = await props.contract.winnerName();
		setVal(val);
        props.allowStepFive(true);
	}

    if(props.allowStepFour)
    {
        return (
            <div>
                <h3>Step 4. Call winnerName() from the contract</h3>
                <p>winnerName address: {val}</p>
                <button onClick={getCurrentVal}> Get Value</button>
            </div>
        );
    }
}

export default StepFour;