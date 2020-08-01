import React, {useState} from 'react'; 


function FizzBuzz(){
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState(""); 
    const [isDisplay, setDisplay] = useState(false);

    function changeHandler(e){
        const newValue = e.target.value; 
        setValue(newValue); 
    }

    function fizzbuzz(){
        let numbers = []; 
        if(isNaN(value) || value < 1 || value > 20){
            setAnswer("Must be a number, must be greater than 1 and cannot be greater than 20");
        }

        else{
            for(let x = 1; x <= value; x++){
                if(x % 15 === 0){
                    numbers.push("FizzBuzz");
                }
                else if(x % 5 === 0){
                    numbers.push("Buzz"); 
                }
                else if(x % 3 === 0){
                    numbers.push("Fizz")
                }
                else{
                    numbers.push(x); 
                }
            } 
        setAnswer(numbers.toString());

        }

        setValue("");
        setDisplay(true);
        // setDisplay(true);
    }

    return(
        <div className="container">
            <h2 className="heading">FizzBuzz Challenge</h2>
            <p className="description">
            Write a program that outputs the string representation of numbers from 1 to 20.
            <br/><br/>
            But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
            </p>
            <input
            type="text"
            name="number"
            onSubmit={changeHandler}
            onChange={changeHandler}
            value={value}
            placeholder="Enter a number"
            />
            <button onClick={fizzbuzz}>Enter</button>
            <p style={{display: isDisplay? "block": "none"}} className="answer">Answer: <br/>{answer}</p>

        </div>
    );
}

export default FizzBuzz; 

