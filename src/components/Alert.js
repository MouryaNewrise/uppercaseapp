import React from 'react'

function Alert(props) {
    // const capitalize = (text) => {
    //     const lower = text.toLowerCase();
    //     return lower.chareAt(0).toUppercase() + lower.slice(1)
    // }
    return (
        props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong>: {props.alert.sms}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>

    )
}

export default Alert