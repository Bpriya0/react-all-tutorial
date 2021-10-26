import React, { useState } from 'react';
import CustomerList from './customerlist';

//state management using fuctional component is hooks

const HookOne = () => {
    //const[currentValue, updatedValue]= useState(initialValue);
    //const[array/VariableName, functionName]=useState(initialValue);

    const [counter, updateCounter] = useState(5);
    const [message, updateMessage] = useState();
    const [a, updateA] = useState(0);
    const [b, updateB] = useState(0);

    const one = () => {
        updateCounter(counter + 5);
        updateMessage("Hi, you are clicked on + Button");
        updateA(a + 1);
    }
    const two = () => {
        updateCounter(counter - 5);
        updateMessage("Hi, you are clicked on - Button");
        updateB(b + 1);
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="text-success">Hooks useState Simple Example </h2>
                    <h1 className="text-danger">{counter}</h1>
                    <button className="btn btn-primary m-2" onClick={one}>+ The {counter} By 5</button>
                    <button className="btn btn-danger m-2" onClick={two}>- The {counter} By 5</button>
                    <p className="text-center p-4 text-info">{message}</p>
                    <h3>The plus was clicked {a} times</h3>
                    <h3>The minus was clicked {b} times</h3>
                </div>
            </div>
            <div className="row">
                <CustomerList 
                    fullname="sneha"
                     mobileno="988575244"
                     cityname="karad"
                     pic="d1.jpg"
                    />   

                <CustomerList 
                    fullname="Rohit"
                     mobileno="985245785"
                     cityname="karad"
                     pic="d2.jpg"
                    />   
            </div>
        </div>
    )
}

export default HookOne;