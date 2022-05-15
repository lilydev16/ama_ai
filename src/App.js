import './App.css';
import { Component } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      prompts: [] 
    }
  }

  addPrompt = (newPrompt) => {
    this.setState({ prompts: [...this.state.prompts, newPrompt] })
  }

  render = () => {
    return (
      <div className="app">
        <Header />
        <Form addPrompt={this.addPrompt} />
        <List prompts={this.state.prompts} />
      </div>
    )

  }
}

export default App;
