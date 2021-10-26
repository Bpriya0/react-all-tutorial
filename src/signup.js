import React, {Component} from 'react';

const product=[

    {name:"Apple",price:200,quantity:2},
    {name:"Mobile",price:2000,quantity:3},
    {name:"Keyboard",price:1000,quantity:1},
    {name:"Orange",price:250,quantity:5},
    {name:"House",price:2000000,quantity:2}

];

class Register extends Component
{
    render()
    {

        return(
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1 className="text-center text-success">Static Multi-Array</h1>
                    <table className="table table-bordered mt-3 table-hover table-sm">
                        <thead>
                            <tr className="text-primary">
                                <th>Sr.No</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((mypro,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{mypro.name}</td>
                                            <td>{mypro.price}</td>
                                            <td>{mypro.quantity}</td>
                                            <td>{mypro.price * mypro.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>

        );

    }
}

export default Register;