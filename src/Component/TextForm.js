import React, { useState , useRef} from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import { CaseUpper, CaseLower, Trash2Icon, Plus, Text, Minus, Copy, Space, Download } from 'lucide-react';
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
        if (confirm) {
            setText("");
            setFontSize(14);

        }

    }
    const handleFontSizeUp = () => {
        if (text.split(" ").filter((word) => word.length !== 0).length !== 0) {
            if (fontSize < 48)
                setFontSize(prevSize => prevSize + 2); // increase by 2px
            else
                window.confirm("You can't increase font size above 48px.")
        }
    };
    const handleFontSizeDown = () => {
        if (text.split(" ").filter((word) => word.length !== 0).length !== 0) {
            if (fontSize > 10)
                setFontSize(prevSize => prevSize - 2); // decrease by 2px
            else
                window.alert("You can't deccrease font size below 10px.");
        }
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtraSpace = () => {
        setText(text.trim().replace(/\s+/g, ' '));
    };
const textRef = useRef();

   const downloadAsPdf = async () => {
  if (!textRef.current) return;

  // Make sure the element is visible to be captured
  textRef.current.style.display = 'block';

  try {
    const canvas = await html2canvas(textRef.current, {
      scale: 2, // better quality
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('emoji-text.pdf');
  } catch (error) {
    console.error("Error generating PDF", error);
    alert("Failed to generate PDF. Check console for details.");
  }

  // Optionally hide it again
  textRef.current.style.display = 'none';
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
    let textStyle = {};
    if (props.mode === "dark") {
        textStyle = {
            fontSize: `${fontSize}px`,
            height: "250px",
            backgroundColor: "rgb(4, 59, 51)",
            color: "white",

        }
    } else {
        textStyle = {
            fontSize: `${fontSize}px`,
            height: "250px",
        }
    }

   
    return (
        <>
            <div className="container">
                <div className="my-4">
                    <h1> {props.heading}</h1>
                   
                    <textarea
                        onChange={handleOnChange}
                        style={textStyle}
                        placeholder='Enter Text Here'
                        value={text}
                        className={`form-control placeholder-background-${props.mode}`}
                        id="myBox"
                    />

                </div>
                 {/* This div is hidden, only for PDF generation */}
  <div
  ref={textRef}
  style={{
    fontSize: `${fontSize}px`,
    padding: "10px",
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(4, 59, 51)" : "white",
    width: "210mm",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    display: "none", // change this temporarily to 'block' to test
    fontFamily: `'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', sans-serif`,
  }}
>
  {text}
</div>
                
                <div className='btnFamily'>
                    <button onClick={handleUpCase} title="Click to UpperCase"
                        className={`btn  btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}
                    ><CaseUpper size={24} /></button>
                    <button onClick={handleLowCase} title="Click to LowerCase" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1  `}><CaseLower size={24} /></button>
                    <button onClick={clear} title="Clear" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}><Trash2Icon size={24} /></button>
                    <button onClick={handleFontSizeUp} title="Click to increase font size" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}> <Text size={20} />
                        <Plus size={16} /></button>
                    <button onClick={handleFontSizeDown} title="Click to decrease font size" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}> <Text size={20} />
                        <Minus size={16} /></button>
                    <button onClick={handleCopy} title="Copy to clipboard" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}> <Copy className="w-5 h-5" /></button>
                    <button onClick={handleExtraSpace} title="Click to Remove Extra Spaces" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}> <Space className="w-5 h-5" /></button>

                    <button onClick={downloadAsPdf} title="Download Text" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} btn-click-effect my-1 `}><Download className="w-5 h-5" /></button>

                </div>
            </div>
            <div className="container">

                <p className='my-2'>Total words={text.split(" ").filter((element) => { return element.length !== 0 }).length}  Total Character={text.length}</p>
            </div>
        </>
    )

}
