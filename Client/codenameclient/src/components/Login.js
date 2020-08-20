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

class Login extends Component{
    render() {
        return <div>
            <h1 style={h1Style}>Log In</h1>
            <p style={pStyle}>
                <label htmlFor="username">User name:</label>
                <input type="text" id="username" name="username" />
            </p>
            <p><button>Send me code</button></p>
            <p><button onClick={ () => window.location.href= '/StartGame'}>Start game</button></p>
        </div>

    }
}

export default Login