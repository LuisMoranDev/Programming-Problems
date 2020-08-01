import React, {useState} from 'react'; 

function LargeNumber(){
    const[largest, setLargest] = useState("");
    const[number, setNumber] = useState("");
    const[isDisplay, setDisplay] = useState(false); 

    function getAnswer(){
        let answer = [10,15,2,4,6,20,4,33];
        for(let x = 0; x < answer.length; x++){
            for(let y = 1; y < answer.length; y++){
                if(answer[x] > answer[y] && answer[x] / 2 >= 1){
                    setLargest(x);
                    setNumber(answer[x]);
                    setDisplay(true);
                }
            }
        }
    }

    return(
        <div className="container">
            <h2 class="heading">
            Largest Number At Least Twice of Others
            </h2>
            <p className="description">
            In a given integer array nums, there is always exactly one largest element.
            <br />
            Find whether the largest element in the array is at least twice as much as every other number in the array.
            <br />
            If it is, return the index of the largest element, otherwise return -1
            <br /> 
            Given Arrays: <br/>Ex1:[10, 15, 2, 4, 6, 20, 4, 33]
            </p>
            <button onClick={getAnswer}>Answer</button>
            <p style={{display: isDisplay ? "block": "none"}}className="answer">Answer: <br/> Index: {largest} <br/> Number: {number}</p>
        </div>
    );
}


export default LargeNumber;