import React, {Component} from 'react'
import { Checkbox } from '@material-ui/core';

const pStyle = {
    margin: 'auto',
    width: '30%',
    padding: '10px',
};

const h1Style = {
    margin: 'auto',
    width: '80%',
    padding: '74px',
};

class CreateGame extends Component{

    constructor(){
        super();
        this.state = {
           gameId: "",
           captain: false
        }
    }

    onPressCaptain = () =>{
        if(this.state.captain == false)
            this.setState({captain: true});
        else
            this.setState({captain: false});
    }


    getAMap = () =>{

    }


    render() {
        return <div>
            <h1 style={h1Style}>Create New Game</h1>
            <p><label htmlFor="gameId">Game id: {this.state.gameId}</label></p>
            <p><label>You are the captain?</label><Checkbox checked={this.state.captain} onChange={this.onPressCaptain}></Checkbox></p>
            <p><button hidden={!this.state.captain} onClick={() => this.getAMap()}>Get a map</button></p>
            <p>
                <button>Choose picture</button><button>Pic a photograph</button>
            </p>
            <p><button onClick={() => window.location.href= '/BoardGame'}>Start</button></p>
        </div>

    }
}

export default CreateGame