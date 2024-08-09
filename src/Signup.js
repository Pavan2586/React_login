

// Signup.js
import React from 'react';
import './styel.css';
function Signup(){
   
    return(
        <div className="container">
        <div className="drop">
            <div className="content">
                <h2 className='animate__heartBeat'>sign-in</h2>
                <form>
                    <div className="input-box">
                        <input type="text" placeholder="firstName"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="LastName"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Phone"/>
                    </div>
                
                    <div className="input-box">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="confirmPassword"/>
                    </div>
                    <div className="input-box">
                        <input type="submit" value="Login" href='#'/>
                    </div>    
                </form>
            </div>
        </div>      
        </div>
    
    )

    
}
export default Signup