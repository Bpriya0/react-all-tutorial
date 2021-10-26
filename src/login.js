import React, {Component} from 'react';

class UserLogin extends Component{
    //first constructor() execute then second render() inside class.
    constructor()
    {
        super(); //because class is extended by component
       // alert("one");
       this.state={
           counter : 100,
           user :["Ramesh","Ganesh","Mohit"]
       }; //to define the variable in a state

    }

    //predefine function of class. It responsible for print everyting under class.
    render()
    {
        //alert("two");
        return(
            <section>
                <h1 align="center">Login</h1>
                <p align="center">Please Enter Login Data</p>
                <h1 className="text-center text-danger">
                    {this.state.counter}
                </h1>
                {
                    this.state.user.map((xuser,index)=>{
                        return(
                            <p key="index" className="p-3 border">{xuser}</p>
                        )
                    })
                }
            </section>
        );

    }
}

export default UserLogin;