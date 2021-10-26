import React from 'react';
import {Link} from 'react-router-dom';
const Test=()=>
{
    return(
      <nav>
          <ul>
              <li><Link to="" className="pagelink">BECOME OUR DEALER</Link></li>
              <li><Link to="/myprop" className="pagelink">BUY USED CARS</Link></li>
          </ul>
      </nav>
    )
}

export default Test;