import './App.css';
import { Component } from 'react';
import Form from './components/Form/Form';

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
      <div className="App">
        <Form addPrompt={this.addPrompt} />
      </div>
    )

  }
}

export default App;
