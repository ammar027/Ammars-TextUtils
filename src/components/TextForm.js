import React, { useState, useRef } from 'react';

export default function TextForm({ heading = '', mode = 'mode', showAlert = ''}) {
    const [text, setText] = useState('');
    const textAreaRef = useRef(null);

    const handleUpClick = () => {
        setText(text.toUpperCase());
        showAlert("Converted to Uppercase", "success")
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
        showAlert("Converted to Lowercase", "success")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        setText('');
        showAlert("Text cleared", "success")
    };

    const handleCopyClick = () => {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            showAlert("Text copied to clipboard", "success")
        }
    };

    const handlePasteClick = async () => {
            try {
                const clipboardText = await navigator.clipboard.readText();
                setText(text + clipboardText);
                showAlert("Text pasted ", "success")
            } catch (err) {
                showAlert("Failed to paste text. Please allow clipboard permissions", "success")
            }
    };

    const handleExtSpcClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        showAlert("Removed Extra Spaces", "success")
    };


    

    const countCharacters = (str) => {
        return str.split('').filter(char => char !== ' ').length;
    };

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charCount = countCharacters(text);

    return (
        <>
            <div className="container" >
            
                <h1 >{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="10"
                        ref={textAreaRef}
                        style={{ backgroundColor: mode === 'light' ? 'white': 'grey' , resize: 'vertical',color: mode === 'dark' ? 'white': 'black'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
                    Convert to Lowercase 
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlePasteClick}>
                    Paste Text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtSpcClick}>
                    Remove Extra Space
                </button>
            </div>
            <div className="container my-4" >
            {/* style={{ color: mode === 'dark' ? 'white': 'black'}} */}
                <h2 >Your text summary</h2>
                <p>{wordCount} words, {charCount} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    );
}
