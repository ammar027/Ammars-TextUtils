import React, { useState } from 'react'


export default function TextForm({heading = ''}) {
    const handelUpClick = ()=>{
        // console.log("Uppcae was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text , setText] = useState('Enter text here');
    return (
        <div>

            <h1>{heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handelUpClick} >Convert to Uppercase</button>

        </div>
  )
}
