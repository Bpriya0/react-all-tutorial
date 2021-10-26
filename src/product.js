import React,{Component} from 'react';

const productlist=["Apple","Mobile","Laptop","Mouse","Keyboard","Mango"];

class UserProduct extends Component
{
    render()
    {
        return(
            <section>
                <h1 align="center" className="text-danger">User Product</h1>
                <p align="center">sdsd sdsd sad sdsd sdsf asds </p>
                {
                    productlist.map((xitem,index)=>{
                        //It use to make unique element - key
                        return( 
                        <div className="myproduct" key={index}>
                           {index}.{xitem}
                        </div>
                        )
                    })
                }
            </section>
        );
    }
}

export default UserProduct;