import React from 'react';

const servicelist=["software services","Marketing Services","BPO Process","Real State","Employment"];

const About =()=>{

    return(
        <section>
            <h1 align="center">About Us</h1>
            <p align="center">
                asd d d ds ffdsfd fdfd fdfd sfdfdsdfdf
                asd d d ds ffdsfd fdfd fdfd sfdfdsdfdf
                asd d d ds ffdsfd fdfd fdfd sfdfdsdfdf
                asd d d ds ffdsfd fdfd fdfd sfdfdsdfdf
                asd d d ds ffdsfd fdfd fdfd sfdfdsdfdf
            </p>

            {
                servicelist.map((service,index)=>{
                    return(
                        <label> {index}_{service}, </label>
                    )
                  
                })
            }
        </section>
    )
}

export default About;