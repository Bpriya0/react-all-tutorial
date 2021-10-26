import React,{Component} from 'react';

class StateFive extends Component
{
    constructor()
    {
        super();
        this.state={
            customer:"",
            product:"",
            vendor:"",
            sales:"",
            income:""
        }
    }

    processCustomer=(obj)=>
    {
        this.setState({
            customer: obj.target.value
        })
    }
    processProduct=(obj)=>
    {
        this.setState({
            product: obj.target.value
        })
    }
    processVendor=(obj)=>
    {
        this.setState({
            vendor: obj.target.value
        })
    }
    processSales=(obj)=>
    {
        this.setState({
            sales: obj.target.value
        })
    }
    processIncome=(obj)=>
    {
        this.setState({
            income: obj.target.value
        })
    }
    render()
    {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2">
                        Customer
                        <input type="text" className="form-control" onChange={this.processCustomer}/>   
                    </div>
                    <div className="col-lg-2">
                        Product
                        <input type="text" className="form-control" onChange={this.processProduct}/>   
                    </div>
                    <div className="col-lg-2">
                        Vendor
                        <input type="text" className="form-control" onChange={this.processVendor}/>   
                    </div>
                    <div className="col-lg-2">
                        Sales
                        <input type="text" className="form-control" onChange={this.processSales}/>   
                    </div>
                    <div className="col-lg-2">
                        Income
                        <input type="text" className="form-control" onChange={this.processIncome}/>   
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 text-center">
                        <h4 className="text-primary">Dashboard of 2010 Sales</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="card shadow-lg bg-dark text-center text-white p-4">
                            <h5>Customers</h5>
                            <p>({this.state.customer})</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-lg bg-danger text-center text-white p-4">
                            <h5>Product</h5>
                            <p>({this.state.product})</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-lg bg-success text-center text-white p-4">
                            <h5>Vendor</h5>
                            <p>({this.state.vendor})</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="card shadow-lg bg-primary text-center text-white p-4">
                            <h5>Sales of 2010</h5>
                            <p>({this.state.sales})</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-lg bg-info text-center text-white p-4">
                            <h5>Income in 2010</h5>
                            <p>({this.state.income})</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateFive;