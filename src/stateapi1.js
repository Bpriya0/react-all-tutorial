import React, { Component } from 'react';

class StateApiOne extends Component {
    constructor() {
        super();
        this.state = {
            citylist: []
        }
    }

    getData = () => {
        fetch("http://firstenquiry.com/api/react/live/allcity.php")
            .then(response => response.json())
            .then(result => this.setState({
                citylist: result
            })
            )
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-primary" onClick={this.getData}>Load City-List</button>
                        <h2>{this.state.citylist.length}-State Managment Using Fetch API</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <table className="table table-bordered">
                            <thead>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Search Name</th>
                                <th>Active</th>
                                <th>CreateDate</th>
                            </thead>
                            <tbody>
                                {
                                    this.state.citylist.map((xitem, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{xitem.id}</td>
                                                <td>{xitem.name}</td>
                                                <td>{xitem.search_name}</td>
                                                <td>{xitem.active}</td>
                                                <td>{xitem.createddate}</td>
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

export default StateApiOne;