import React, {useState} from 'react'; 

const NumberSteps = () => {
    const [value, setValue] = useState(""); 
    const [number, setNumber] = useState(""); 
    const [isDisplay, setDisplay] = useState(false);
    

    function changeHandler(e){
        let newValue = e.target.value; 
        setValue(newValue); 
    }

    function numberOfSteps(){
        let steps = 0; 
        if(isNaN(value) || value < 1 || value === ""){
            setNumber("Input must be a number greater than 0");
        }
        else{
            let nums = value; 
        while(nums !== 0){
            if(nums % 2 === 0){
                nums = nums/2; 
                steps++;
            }
            else{
                nums--
                steps++;
            }
        }
        setNumber(steps); 
        setDisplay(true); 

        }
     
    }

    return(
        <div className="container">
            <h2 className="heading">Number of Steps   </h2>
            <p className="description">Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. </p>
            <input
            type="text"
            name="number"
            onChange={changeHandler}
            value={value}
            placeholder="Enter a number"
            />
            <button onClick={numberOfSteps}>Enter</button>
            <p style={{display: isDisplay ? "block": "none"}} className="answer">Answer: {number}</p>
        </div>
    ); 
}


export default NumberSteps; 