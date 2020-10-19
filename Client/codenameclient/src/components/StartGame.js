import React, {Component} from 'react'

const pStyle = {
    margin: 'auto',
    width: '30%',
    padding: '10px',
};


class StartGame extends Component{

    constructor(){
        super();
        this.state = {
            gameIdHidden : true
        }
    }


    render() {
        return <div>
            <h1>Welcome to online code name</h1>
            <p><button onClick={() => this.changeDisable()}>Join to exits game</button></p>
            <p style={pStyle}>
                <label htmlFor="gameId" hidden={this.state.gameIdHidden}>Game id:</label>
                <input hidden={this.state.gameIdHidden} type="text" id="gameId" name="gameId" />
            </p>
            <p><button hidden={this.state.gameIdHidden}>Join</button></p>
            <p><button hidden={!this.state.gameIdHidden} onClick={() => window.location.href= '/CreateGame'}>Create new game</button></p>
        </div>

    }

    async changeDisable(){
        this.setState({gameIdHidden : false})
    }
}

export default StartGame