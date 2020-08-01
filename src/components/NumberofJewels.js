import React, {useState} from 'react'; 

const NumberofJewels = () => {
    const [isDisplay, setDisplay] = useState(false); 
    const [numbers, setNumbers] = useState(""); 
    
    function numJewelsInStones(){
        let j = "aA";
        let s = "aAAbbcadfasdfhdfafefsadfafA";

        let jewels = j.split("");  
        let stones = s.split("");
        let count = 0; 
        for(let x=0; x < jewels.length; x++){
            for(let y=0; y < stones.length; y++){
                if(jewels[x] === stones[y]){
                    count++; 
                }
            }
        }
        setNumbers(count);
        setDisplay(true);  
    }

    return(
        <div className="container">
            <h2 className="heading">Number of Jewels In Stones</h2>
            <p className="description">You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels. <br /> <br /> 
            The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A". 
            <br /> 
            Inputs: <br/> J = "aA" <br/> S = "aAAbbcadfasdfhdfafefsadfafA"
            </p>
            <button onClick={numJewelsInStones}>Answer</button>
            <p style={{display: isDisplay ? "block": "none"}} className="answer">Answer: {numbers}</p>

            
        </div>

    ); 

}

export default NumberofJewels; 

