import React, { Component } from 'react';
import './style.css';
import api from '../../services/index';
import Response from '../Response/index';

class Input extends Component {
  state = {
    message: '',
    response: '',
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleMessage = async () => {
    const response = await api.post('/api/message', this.state.message, this.state.messageContext); 
    const responseArray = response.data.result.output.generic;
    const responseMessage = responseArray[0].text;
    this.setState({ response: responseMessage });
    console.log(responseMessage);
    this.setState({ message: '' });
  };

  render() {
    return(
      <>
      <div className="container">
        <input onChange={this.handleChange} value={this.state.message} type="text" placeholder="Digite a mensagem"/>
        <button onClick={this.handleMessage} type="button">Enviar</button>
      </div>
      <div className="container-response">
        <Response response={this.state.response}/>
      </div>
      </>
    );
  }

};

export default Input;