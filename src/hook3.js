import React,{useState} from 'react';
import {Link, useParams} from 'react-router-dom';

const userList=[
    {name:"sneha",mobile:"999999999",city:"pune",age:"22 Years"},
    {name:"Rohit",mobile:"888888888",city:"Karad",age:"23 Years"},
    {name:"Hrishi",mobile:"944449999",city:"pune",age:"28 Years"},
    {name:"Ankit",mobile:"9985559999",city:"pune",age:"25 Years"}
];
const HookThree=()=>
{
    const{userid}= useParams();/*it used  to capture parameter from browser url.
        `/${index}/hookthree`  - backtick for combining string and variable together*/

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Hooks useParam(), useState() Example</h2>
                    <h1>Your User id is: {userid}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <ul className="list-group">
                        <li className="list-group-item active">Available Users</li>
                        {
                            userList.map((xuser,index)=>{
                                return(
                                    <li className="list-group-item">
                                        <Link  to={`/${index}/hookthree`}>{xuser.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-lg-7">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <td>{userList[userid].name}</td>
                            </tr>
                            <tr>
                                <th>Mobile Number</th>
                                <td>{userList[userid].mobile}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{userList[userid].city}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{userList[userid].age}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default HookThree;