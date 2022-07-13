import React, { useState } from 'react'


function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'pink',
        backgroundColor: 'teal'
    })

    const [mybtn, setMybtn] = useState("Enable dark Mode");
    const toggleStyle = () => {
        if (myStyle.color === 'pink') {
            setMyStyle({
                color: 'teal',
                backgroundColor: 'pink'
            })
            setMybtn('Enable dark Mode')

        } else {
            setMyStyle({
                color: 'pink',
                backgroundColor: 'teal'
            })
            setMybtn('Enable light Mode')
        }
    }


    return (
        <>
            <section id='about'>
                <div className="container my-5" style={myStyle}>
                    <div className="accordion py-5" id="accordionExample">
                        <div className="card">
                            <h1 className='text-center py-3'> About us page</h1>
                            <div className="card-header" id="headingOne" style={myStyle}>
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Collapsible Group Item #1
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo" style={myStyle}>
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Collapsible Group Item #2
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    Some placeholder content for the second accordion panel. This panel is hidden by default.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree" style={myStyle}>
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Collapsible Group Item #3
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                    <div class="custom-control custom-switch">
                        <input onClick={toggleStyle} type="checkbox" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label" for="customSwitch1">{mybtn}</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About