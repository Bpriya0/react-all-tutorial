import React,{Component} from 'react';

class CarList extends Component
{
    constructor(props)
    {
        super(props)
    }

   render()
   {
       return(
           <div className="col-lg-3 mt-3">
               <div className="card">
                                      
                   <div className="card-header bg-secondary">
                       <b>{this.props.carmodel}</b>
                   </div>

                   <div className="card-body text-center">
                        <img src={`http://firstenquiry.com/api/img/${this.props.carpic}`}
                                id="mycard"
                                className="img-fluid"
                        />
                        <p>
                            <label className="text-dark">Fuel :{this.props.carfuel}</label> 
                            <hr className="bg-danger"/>
                              <label>Mileage: {this.props.carmileage}</label>
                        </p>
                   </div>

                   <div className="card-footer text-center bg-secondary">
                       <label className="font-weight-bold">Price: {this.props.carprice}</label>
                   </div>

               </div>
           </div>
       )
   }
}

export default CarList;