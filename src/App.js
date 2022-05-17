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
      texts: [],
      error: ''
    }
  }

  addPrompt = (newPrompt) => {
    apiCalls.postPrompt(newPrompt.promptInput)
      .then(textData => {
        this.setState({ texts: [textData, ...this.state.texts]})
      })
      .catch(err => {
        this.setState({ error: `Oops... Something went wrong. Our team is working on fixing the issue` })
      })
  }

  render = () => {
    return (
      <div className="app">
        {this.state.error ? <p className='error'>{this.state.error}</p> :
        <>
          <Header />
          <Form addPrompt={this.addPrompt} />
          <List texts={this.state.texts} />
        </>
        }
      </div>
    )
  }
}

export default App;
