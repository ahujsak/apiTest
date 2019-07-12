import './App.css';

import React, {Component} from 'react';

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { getApiKeys } from './api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responseText: '',
      token: ''
    }
  }
  changeText = (e) => {
    this.setState({
      token: e.target.value
    })
  }
  makeCall = async () => {
    this.setState(
      {
        responseText: 'making call'
      }
    )
    try { // h22UWNTboATPWOf4KZzTnE5X6OZzxuWe   //2foHhSFSzxdhYxfmtLIZAPKai6SfZ5yb
      const keys = await getApiKeys(this.state.token)
      console.log('keys response', keys)
      console.log('keys', keys.json())
      this.setState({
        responseText: 'Success'
      })
      
    } catch(e) {
      console.log('Error Message ', e.message)
      this.setState({
        responseText:  e.message
      })
    }
  }
  makeSpend = () => {
    const spendTarget = {
      nativeAmount: '431980',
      publicAddress: '3A3GmsQBw6kAEt9ySkGca3SusWey9Sswiu',
      otherParams: {}
    }
  }
  render () {
    const cNmae = this.state.responseText === 'Success' ? 'RegularText' : 'ErrorText'
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Enter the token for the Auth token.
          </p>
          <p className={cNmae}>
            {this.state.responseText}
          </p>
          <div className="InputArea">
            <TextField onChange={this.changeText} fullWidth/>
          </div>
         
          <div className="Row"> 
            <Button
              variant="raised"
              onClick={this.makeCall}
            >
              Get API Keys
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
