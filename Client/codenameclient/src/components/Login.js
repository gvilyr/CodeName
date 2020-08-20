import React, {Component} from 'react';

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

const serverAddress= 'https://w4x0h4zv01.execute-api.us-east-2.amazonaws.com/logPage';


class Login extends Component{

    constructor(){
        super();
        this.state = {
            userName : "",
            phoneNumber: "",
            phoneNumberHidden : true
        }
    }

    updateUserName = event =>{
        this.setState({userName: event.target.value});
    }

    fetchLogin (userName)  {
        var xhr = new XMLHttpRequest();
        var json_obj, status = false;
        //let Jres = '';
        xhr.open("GET", serverAddress + '/login/' + userName, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    json_obj = JSON.parse(xhr.response);
                    console.log(json_obj);
                    status = true;
                    this.setState({phoneNumber: json_obj['phoneNumber']});
                    this.setState({phoneNumberHidden: false});
                } else {
                    console.error(xhr.statusText);
                }
            }
        }.bind(this);
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);
    }


    componentDidMount(){
        let userN = this.state.userName;
        console.log(userN);
        this.fetchLogin(userN);
    }


    render() {
        return <div>
            <h1 style={h1Style}>Log In</h1>
            <p style={pStyle}>
                <label htmlFor="username">User name:</label>
                <input onChange = {this.updateUserName} type="text" id="username" name="username" />
            </p>
            <p><button onClick={()=> this.componentDidMount()}>Send me code</button></p>
            <p style={pStyle}>
                <label hidden={this.state.phoneNumberHidden} htmlFor="phoneNumber">Send code to phone number: {this.state.phoneNumber}</label>
            </p>
            <p><button onClick={() => window.location.href= '/StartGame'}>Start game</button></p>
        </div>
    }
}

export default Login