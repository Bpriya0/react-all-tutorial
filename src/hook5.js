import React,{useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';

const HookFive=()=>
{
    const temp= {"name":"ramesh", "mobile":"145245","city":"Banglore","photo":"1.jpg"};

    const[user, updateUser]= useState([temp]);

    const{userid}=useParams();

    const getUser=()=>
    {
        fetch("user.json")
        .then(response=>response.json())
        .then(result=>updateUser(result));
    }

    useEffect(()=>{  //It excute after page render    
        getUser();
    },[true])

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-success">useEffect Example</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>{userid} - Total Users are :{user.length}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active">Customer List</li>
                        {
                            user.map((xuser,index)=>{
                               return(
                                <li className="list-group-item">
                                    <Link to={`/${index}/hookfive`}>{xuser.name}</Link>
                                </li>
                               )
                             
                            })
                        }
                    </ul>
                </div>

                <div className="col-md-4">
                   <p className="p-4 border">
                    <h4 className="text-success">About {user[userid].name}</h4>
                    <p>Mobile- {user[userid].mobile}</p>
                    <p>City- {user[userid].city}</p>
                    </p>
                </div>
                
                <div className="col-mg-3">
                    <img src={user[userid].photo} className="img-fluid rounded-circle"/>
                </div>
                
            </div>
        </div>
    )
}

export default HookFive;