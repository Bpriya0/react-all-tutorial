import React from 'react';

const citylist=["Banglore","Pune","Mumbai","Bhuvneshwar","Patana"];

const Home=()=>
{
    return(
        <section>
            <h1 align="center">Available City: {citylist.length} </h1>
            {
                citylist.map((city,index)=>{
                    return(
                        <p align="center">{index}. {city}</p>
                    )
                })
            }
        </section>

    )
}

export default Home;