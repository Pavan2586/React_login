
// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styel.css';

function Login(){
   
    return(
        <div className="container">
            <div className="drop">
                <div class="content">
                    <h2 className='animate__heartBeat'>Login</h2>
                    <form>
                        <div className="input-box">
                            <input type="text" placeholder='username'/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='password'/>
                        </div>
                        <div className="input-box">
                            <input type="button" value="Login" href='#'/>
                        </div> 
                        </form>
                        <Link to="/Signup" className="btn signup">Signup</Link>
                        <Link to="/Forget" className="btn forget">Forget</Link>
                    </div>
                </div>   
        </div>
    
    )

    
}
export default Login