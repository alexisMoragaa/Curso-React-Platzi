import React from 'react'


function Loader (){
    return(
     
            <div className="text-center text-primary col-sm-12">
                <div className="spinner-grow " role="status" style={{height:'10rem', width:'10rem'}}>
                    <span className="sr-only"></span>
                </div>
             </div>
    
    )
}



export default Loader