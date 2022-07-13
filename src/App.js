import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MyText from './components/MyText';
import Alert from './components/Alert';
// import { Routes, Route } from 'react-router-dom';
// import About from './components/About';



function App() {
    const [mode, setMode] = useState('dark')
    const [btnSwitch, setBtnSwitch] = useState('dark mode')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            sms: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const ToggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
            setBtnSwitch('light mode')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = "black"
            showAlert("light mode has been enabled", "success")
        } else {
            setMode('dark')
            setBtnSwitch('dark mode')
            document.body.style.backgroundColor = 'green'
            showAlert("dark mode has been enabled", "success")
        }
    }
    return (
        <>

            <div>
                <Navbar mode={mode} toggleMode={ToggleMode} switch={btnSwitch} />
                <Alert alert={alert} />
                <MyText showAlert={showAlert} mode={mode} />
                {/* <Routes> */}
                {/* <Route path="/About" element={<About />} /> */}
                {/* <Route path="/MyText" element={<MyText />} /> */}
                {/* </Routes> */}

            </div>
        </>
    );
}

export default App;