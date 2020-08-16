import React, {Component} from 'react'

const pStyle = {
    margin: 'auto',
    width: '30%',
    padding: '10px',
};

const h1Style = {
    margin: 'auto',
    width: '30%',
    padding: '74px',
};

class Register extends Component{
    render() {
        return <div>
            <h1 style={h1Style}>Register</h1>
            <p style={pStyle}>
                <label htmlFor="username">User name:</label>
                <input type="text" id="username" name="username" />
            </p>
            <p style={pStyle}>
                <label htmlFor="phone_number">Phone number:</label>
                <input type="text" id="phone_number" name="phone_number" />
            </p>
            <p><button onClick={ () => window.location.href= '/StartGame'}>Start game</button></p>
        </div>

    }
}

export default Register