import React from 'react';
import {Link} from 'react-router-dom';
const Header=()=>{

    return(

        <nav>
            <ul>
                <li><Link to="/" className="pagelink">Home</Link></li>
                <li><Link to="/login" className="pagelink">Log</Link></li>
                <li><Link to="/signup" className="pagelink">Sig</Link></li> 
                <li><Link to="/userproduct" className="pagelink">Pro</Link></li>
                <li><Link to="/stateone" className="pagelink">S1</Link></li>
                <li><Link to="/statetwo" className="pagelink">S-2</Link></li>
                <li><Link  to="/statethree" className="pagelink">S-3</Link></li>
                <li><Link to="/statefour" className="pagelink">S-4</Link></li>
                <li><Link to="/statefive" className="pagelink">S-5</Link></li>
                <li><Link to="/statesix" className="pagelink">S-6</Link></li>
                <li><Link to="/stateapione" className="pagelink">API-1</Link></li>
                <li><Link to="/stateapitwo" className="pagelink">API-2</Link></li>
                <li><Link to="/stateapithree" className="pagelink">API-3</Link></li>
                <li><Link to="/stateapifive" className="pagelink">API-5</Link></li>
                <li><Link to="/hookone" className="pagelink">H1</Link></li>
                <li><Link to="/hooktwo" className="pagelink">H2</Link></li>
                <li><Link to="/1/hookthree" className="pagelink">H3</Link></li>
                <li><Link to="/0/pune/hook4" className="pagelink">H4</Link></li>
                <li><Link to="/0/hookfive" className="pagelink">H5</Link></li>
                <li><Link to="/myprops" className="pagelink">P1</Link></li>
                <li><Link to="/validation" className="pagelink">V1</Link></li>
            </ul>
        </nav>

    )

}

export default Header;