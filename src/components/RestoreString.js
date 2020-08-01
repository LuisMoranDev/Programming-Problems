import React, {useState} from 'react'; 

const RestoreString = () => {
    const [isDisplay, setDisplay] = useState(false); 
    const [answer, setAnswer] = useState(""); 
    
    function restore(){
        let s = "codeleet";
        let indices = [4,5,6,7,0,2,1,3];
        let newString = []; 
        for(let x = 0; x < s.length; x++){
            newString[indices[x]] = s[x];
        }
        setAnswer(newString.join(''));
        setDisplay(true);  
    }

    return(
        <div className="container"> 
            <h2 className="heading">
                Shuffle String
            </h2>
            <p className="description">Given a string s and an integer array indices of the same length.<br/>The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.Return the shuffled string.<br/>
            Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]</p>
            <button onClick={restore}>Answer</button>
            <p className="answer" style={{display: isDisplay? "block": "none"}}>Answer: {answer}</p>

        
        </div>
    );

}

export default RestoreString; 