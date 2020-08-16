import React, {Component} from 'react'
import './Welcome.css';


class Welcome extends Component{
    render() {
        return <div>
            <h1>Welcome To Online Code Name</h1>
            <p><button onClick={ () => window.location.href= '/Login'}>Login</button></p>
            <p><button onClick={ () => window.location.href= '/Register'}>Register</button></p>
            <p><button>About</button></p>
        </div>

    }
}

export default Welcome