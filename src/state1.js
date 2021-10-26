//state used to maintain status of variable and array.
import React, { Component } from 'react';

class StateOne extends Component {
    //for maintain the state of variable.
    constructor() {
        super();
        this.state = {
            counter: 5,
          //  message: ''
        }
    }

    One = () => {

        this.setState({
            counter : this.state.counter + 5
         })
    
        /*
        if(this.state.counter<25)
        {
            this.setState({
                counter : this.state.counter + 5
             })
        }
        else
        {
            this.setState({
            message: "max limit is 25"
             })
        }
        */
       
    }

    Two = () => {
        this.setState({
            counter: this.state.counter - 5,
           // message: "Empty"
        })
    }
// render() is callback of setState, on state update render() will call automatically
    render() {
        //alert("render called");
        return (
            <div className="container  mt-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="text-success m-3">
                            The Counter is: <br/>  {this.state.counter}
                        </h1>
                        
                        <button className="btn btn-primary m-2" onClick={this.One}>+ The {this.state.counter} by 5 </button>
                        <button className="btn btn-danger m-2" onClick={this.Two}>- The {this.state.counter} by 5 </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StateOne;