import './App.css';
import { Component } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import Header from './components/Header/Header';
import apiCalls from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      texts: []
    }
  }

  addPrompt = (newPrompt) => {
    apiCalls.postPrompt(newPrompt.promptInput)
      .then(textData => {
        this.setState({ texts: [...this.state.texts, textData]})
      })
      // .catch(err => {

      // })
  }

  render = () => {
    return (
      <div className="app">
        <Header />
        <Form addPrompt={this.addPrompt} />
        <List texts={this.state.texts} />
      </div>
    )

  }
}

export default App;
