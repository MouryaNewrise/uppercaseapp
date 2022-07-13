import React from 'react'
// import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <section id='navbar'>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/MyText">TextUnit</Link> */}
                            </li>
                            {/* <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/About">About</Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/">Contact Us</Link> */}
                            </li>

                        </ul>
                        <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input type="checkbox" onClick={props.toggleMode} class="custom-control-input" id="customSwitch1" />
                            <label className="custom-control-label" for="customSwitch1">Enable mode</label>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar

// Navbar.PropsType = { about: PropsType.string.isRequired, contact: PropsType.string.isRequired }
// Navbar.defaultProps = { about: "set about page", contact: "set contact page" }