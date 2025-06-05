import React from 'react'

export default function TextForm(props) {
    return (
       
            <div className="my-4">
             <h1> {props.heading}</h1>  
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
        
    )
}
