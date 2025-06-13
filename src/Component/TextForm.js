import React, { useState } from 'react';
import { CaseUpper, CaseLower, Trash2Icon, Plus, Text, Minus, Copy, } from 'lucide-react';
import "./textForm.css";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const [fontSize, setFontSize] = useState(14);

    // const [italic, setItalic] =useState(false);

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowCase = () => {
        setText(text.toLowerCase());
    }
    const clear = () => {
        let confirm = window.confirm("Are you sure you want to clear text?");
        if (confirm) { setText(""); }

    }
    const handleFontSizeUp = () => {
        if (fontSize < 48)
            setFontSize(prevSize => prevSize + 2); // increase by 2px
        else
            window.confirm("You can't increase font size above 48px.")

    };
    const handleFontSizeDown = () => {
        if (fontSize > 10)
            setFontSize(prevSize => prevSize - 2); // decrease by 2px
        else
            window.confirm("You can't deccrease font size below 10px.")
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    // const handleItalic =()=>{
    //     if(italic ===true){
    //         setText(italicText);
    //         setItalic(false);
    //     }
    //     else{
    //         setItalic(true);
    //     }

    // }
    
    let textStyle = {
        fontSize: `${fontSize}px`,
        height: "250px",
    }


    return (
        <>  
            <div className="container">
                <div className="my-4">
                    <h1> {props.heading}</h1>
                    <textarea onChange={handleOnChange} style={textStyle} placeholder='Enter Text Here' value={text} className="form-control" id="myBox" ></textarea>
                </div>
                <div className='btnFamily'>
                    <button onClick={handleUpCase} title="Click to UpperCase"
                        className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect`}
                    ><CaseUpper size={24} /></button>
                    <button onClick={handleLowCase} title="Click to LowerCase"  className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect`}><CaseLower size={24} /></button>
                    <button onClick={clear} title="Clear"  className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect`}><Trash2Icon size={24} /></button>
                    <button onClick={handleFontSizeUp} title="Click to increase font size"  className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect`}> <Text size={20} />
                        <Plus size={16} /></button>
                    <button onClick={handleFontSizeDown} title="Click to decrease font size"  className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect`}> <Text size={20} />
                        <Minus size={16} /></button>
                    <button onClick={handleCopy} title="Copy to clipboard"  className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect`}> <Copy className="w-5 h-5" /></button>

                    {/* <button onClick={handleItalic} title="" className="btn btn-outline-dark "> <Italic className="w-5 h-5" /></button> */}


                </div>
            </div>
            <div className="container">
                {/* <p>Total words={text.split(/(?<=[a-zA-Z])\s+/).length}  Total Character={text.length}</p> */}
                {/* <p>Total words={text.split(" ").length-1}  Total Character={text.length}</p> */}
                {/* <p>Total words={text.length===0? text.split(" ").length-1: text.split(" ").length}  Total Character={text.length}</p> */}
                <p className='my-2'>Total words={text.length === 0 ? text.split(" ").length - 1 : text.split(" ").length === 1 ? text.split(" ").length : text.split(" ").length - 1}  Total Character={text.length}</p>
            </div>
        </>
    )

}
