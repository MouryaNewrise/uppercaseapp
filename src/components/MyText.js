import React, { useState } from 'react'
const spell = require('spell-checker-js')



function MyText(props) {

    const [text, setText] = useState('')

    const handleSpellCheckClick = () => {
        const check = spell.load()
        // console.log('Uppercase was clicked' + text)
        let newText = document.getElementById('myBox');
        let newTexts = newText.check();
        setText(newTexts)
        props.showAlert("CHECK SPELL ", "success")
    }

    const handleUpClick = (e) => {
        e.preventDefault()
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }

    const handleLoClick = () => {
        // console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to TOLOWERCASE", "success")
    }

    const handleClearClick = () => {
        // console.log('Uppercase was clicked' + text)
        let newText = document.getElementById('myBox');
        let newTexts = newText.Clear();
        setText(newTexts)
        props.showAlert("CLEAR ALL TEXT", "success")
    }
    const handleSearchClick = () => {
        console.log('Uppercase was clicked' + text)
        let newText = document.getElementById('myBox');
        let newTexts = newText.search();
        setText(newTexts)
        props.showAlert("SEARCH YOUR TEXT", "success")
    }
    const handleCopy = () => {
        console.log('I am clicked')
        let newText = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success")
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log('on Change')
        setText(event.target.value)
    }

    return (
        <>
            <section id='myText'>
                <div className='container'  >
                    <form className="container" style={{ color: props.mode === 'light' ? 'green' : 'white' }}>
                        <div className="md-3">
                            <div className="form-group">
                                <h1>{props.heading}</h1>
                                <label for="myBox" className="form-label">Example textArea</label>
                                <textarea value={text} style={{ backgroundColor: props.mode === 'light' ? 'green' : 'white', color: props.mode === 'light' ? 'white' : 'green' }} className="form-control" id="myBox" rows="8" onChange={handleOnChange} />
                            </div>
                            <button className='btn btn-primary mx-1' onClick={handleUpClick} > Convert To UpperCase </button>
                            <button className='btn btn-primary mx-1' onClick={handleLoClick} > Convert To LowerCase </button>
                            <button className='btn btn-primary mx-1' onClick={handleClearClick} > Clear Text </button>
                            <button className='btn btn-primary mx-1' onClick={handleSearchClick} > Search Text </button>
                            <button className='btn btn-primary mx-1' onClick={handleCopy} > Copy Text </button>
                            <button className='btn btn-primary mx-1' onClick={handleSpellCheckClick} > spell check Text </button>
                        </div>
                    </form>
                    <div className='container my-5'>
                        <h2>Your text Summary</h2>
                        <p>{text.split(" ").length} words and {text.length} Character</p>
                        <p>{0.008 * text.split("").length} Minutes Read time</p>
                        <h2>Preview Summary</h2>
                        <h3>{text.length > 0 ? text : "enter your text in the textBox..."}</h3>
                        {/* <h3>{text}</h3> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyText