import React, { Component } from 'react';

class StateTwo extends Component {
    constructor() {
        super();
        this.state = {
            loc: "Banglore",
            citylist: ["Pune", "solapur"]
        }
    }

    processValue = (obj) => {
        //alert(obj.target.value);
        this.setState({
            loc: obj.target.value
        })
    }

    AddValue = () => {
        this.setState({
            citylist: this.state.citylist.concat(this.state.loc)
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <h1 className="text-success">{this.state.loc}</h1>
                        <p className="mt-3">
                            Enter City-Name
                            <input type="text" className="form-control" onChange={this.processValue} />
                        </p>
                        <button className="btn btn-primary" onClick={this.AddValue}>Save</button>
                        <hr />
                        {
                            this.state.citylist.map((xcity, index) => {
                                return (
                                    <p key={index}>{xcity}</p>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        );
    }
}

export default StateTwo;