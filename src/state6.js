import React, { Component } from 'react';

class StateSix extends Component {
    constructor() {
        super();
        this.state = {
            userlist: ["Ramesh", "Ganesh"],
            newuser: ''
        }
    }

    deleteUser = (index) => {
        alert(index);
        this.state.userlist.splice(index, 1);
        this.setState({
            userlist: this.state.userlist
        })
    }

    saveUser = () => {

        this.setState({
            userlist: this.state.userlist.concat(this.state.newuser),
            newuser: ''
        })
    }

    processName = (obj) => {
        this.setState({
            newuser: obj.target.value
        })
    }
    //bind function used to bind parameter to function.
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Array Operation</h2>
                        <p>Available Users - {this.state.userlist.length}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="text-center bg-light p-3">
                            <lable>Enter UserName</lable>
                            <input type="text" className="form-control" onChange={this.processName} value={this.state.newuser} />
                            <br />
                            <button className="btn btn-primary btn-block" onClick={this.saveUser}>Save User</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <table className="table table-bordered table-sm text-center">
                            <thead>
                                <tr className="text-info">
                                    <th>Item Index</th>
                                    <th>Item Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.userlist.map((xuser, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{xuser}</td>
                                                <td><button className="btn btn-danger btn-sm" onClick={this.deleteUser.bind(this, index)}>Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        )
    }
}

export default StateSix;