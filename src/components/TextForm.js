import React, { useState } from 'react'

export default function TextForm({ heading = '' }) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const countCharacters = (str) => {
        return str.split('').filter(char => char !== ' ').length;
    };

    const [text, setText] = useState('');
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
                        style={{ resize: 'vertical' }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
                    Convert to Lowercase
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
