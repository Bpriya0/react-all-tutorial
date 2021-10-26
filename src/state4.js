import React,{Component} from 'react';

class StateFour extends Component
{
    constructor()
    {
        super();
        this.state={
            name:"",
            email:"",
            mobile:"",
            address:""
        }
    }

    processValue=(obj)=>
    {
        this.setState({
            name:obj.target.value,  
        })
    }

    
    processEmail=(obj)=>
    {
        this.setState({ 
            email:obj.target.value
        })
    }

    processMobile=(obj)=>
    {
        this.setState({ 
            mobile:obj.target.value
        })
    }

    processAddress=(obj)=>
    {
        this.setState({ 
            address:obj.target.value
        })
    }

    render()
    {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="text-center text-danger">My Information</h3>
                        <p>
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={this.processValue}/>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={this.processEmail}/>
                        </p>
                        <p>
                            <label>Mobile</label>
                            <input type="number" className="form-control" onChange={this.processMobile}/>
                        </p>
                        <p>
                            <label>Address</label>
                            <input type="text" className="form-control" onChange={this.processAddress}/>
                        </p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 text-success">
                        <h3 className="text-danger">Preview of my Information</h3>
                        <p className="mt-5">Name : {this.state.name}</p>
                        <p>Email : {this.state.email}</p>
                        <p>Mobile : {this.state.mobile}</p>
                        <p>Address: {this.state.address}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateFour;