import React, {useState, useEffect} from 'react';
import CustomerList from './customerlist';

const MyProps=()=>
{
    const[user, updateUser]= useState([]);
    const[car, updateCar]= useState([]);

   const getUser=()=>
    {
        fetch("user.json")
        .then(response=>response.json())
        .then(result=>updateUser(result));
        
    }
    const getCar=()=>
    {
        fetch("http://firstenquiry.com/api/car.json")
        .then(response=>response.json())
        .then(result=>updateCar(result));
        
    }

    useEffect(()=>{
        getUser();
        getCar();
    },[true])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Reactjs props, component reuse, interaction</h2>
                    <h1>User-List:  {user.length}</h1>
                </div>
           
              
                {
                    user.map((xuser,index)=>{
                        return(
                            <CustomerList
                                key={index}
                                fullname={xuser.name}
                                mobileno={xuser.mobile}
                                cityname={xuser.city}
                                pic={xuser.photo}    
                            />
                        )
                    })
                }
             </div> 
             <hr/>
             <div className="row">
                 <div className="col-md-12 text-center">
                     <h2>Available Car-List:{car.length}</h2>
                 </div>
                 {
                     car.map((xcar,index)=>{
                         return(
                             <div className="col-md-4 form-group" key={index}>
                                 <h4 className="text-primary">{xcar.model}</h4>
                                 <img src={`http://firstenquiry.com/api/img/${xcar.image}`} height="140" width="100%"/>
                                 <p>Price: {xcar.price}</p>
                                 <p>Fuel: {xcar.fuelType}</p>
                                 <p>Mileage: {xcar.mileage}</p>
                             </div>
                         )
                     })
                 }
             </div>
            
        </div>
    )
}

export default MyProps;