

// Forget.js
import React from 'react';
import './styel.css';
function Forget(){
   
    return(
        <div className="container">
        <div className="drop">
            <div className="content">
                <h2 className='animate__heartBeat'>forget-password</h2>
                <form>
                    <div className="input-box">
                        <input type="text" placeholder="UserName/Email"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="MobileNumber"/>
                    </div>
                    <div className="input-box">
                        <input type="submit" value="forget" href='#'/>
                    </div>    
                </form>
            </div>
        </div>      
        </div>
    
    )

    
}
export default Forget;