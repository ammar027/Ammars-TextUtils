import React, { useState, useRef } from 'react';

export default function TextForm({ heading = '' }) {
    const [text, setText] = useState('');
    const textAreaRef = useRef(null);

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleCopyClick = () => {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            // alert('Text copied to clipboard!');
        }
    };

    const handlePasteClick = async () => {
            try {
                const clipboardText = await navigator.clipboard.readText();
                setText(text + clipboardText);
            } catch (err) {
                console.error('Failed to read clipboard contents: ', err);
                alert('Failed to paste text. Please allow clipboard permissions.');
            }
    };

    const handleExtSpcClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    };


    

    const countCharacters = (str) => {
        return str.split('').filter(char => char !== ' ').length;
    };

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charCount = countCharacters(text);

    return (
        <>
            <div className="container">
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="10"
                        ref={textAreaRef}
                        style={{ resize: 'vertical' }}
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
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{wordCount} words, {charCount} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
