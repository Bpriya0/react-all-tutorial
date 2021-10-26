import React,{Component} from'react';

class CustomerList extends Component
{
    constructor(props)
    {   //component interaction 
        //component reusablity
        //through property it send data
        super(props);
    }

    render()
    {
        return(
            <div className="col-md-3 form-group">
               <div className="card">

                   <div className="card-header bg-primary text-white">
                       <b>{this.props.fullname}</b>
                    </div>

                    <div className="card-body text-center">
                       <img src={this.props.pic} className="img-fluid rounded"/>

                        <p className="text-center">
                            <label>
                                From : {this.props.cityname}
                            </label>
                        </p>
                    </div>

                    <div className="card-footer">
                        Mobile No:{this.props.mobileno}
                    </div>

               </div>
            </div>
        )
    }
}

export default CustomerList;