import React, {useState} from 'react'; 


const RunningSum = () => {
    const [isDisplay, setDisplay] = useState(false);
    const [numbers, setNumber] = useState(""); 

    function addSum(){
        let nums = [1,2,3,4,5,6]; 
        for(let x = 1; x < nums.length; x++){
            nums[x] = nums[x-1] + nums[x]; 
        }
        setNumber(nums.toString());
        setDisplay(true);
    }

    return(
        <div className="container">
            <h2 className="heading">Running Sum of Numbers</h2>
            <p className="description">Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). <br/><br/>
            Return the running sum of nums.<br/>
            Input: nums = [1,2,3,4,5,6]
            </p> 
            <button onClick={addSum}>Answer</button>
            <p style={{display: isDisplay ? "block": "none"}}className="answer">Answer: <br/> {numbers}</p>

        </div>
    );
}

export default RunningSum; 