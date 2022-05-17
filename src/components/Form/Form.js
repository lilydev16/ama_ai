import { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      promptInput: '',
      engine: ''
    }
  }

  updatePromptInput = (e) => {
    this.setState({ promptInput: e.target.value })
  }
  
  submitPrompt = (e) => {
    e.preventDefault()
    const newPrompt = { id: Date.now(), ...this.state }
    this.props.addPrompt(newPrompt)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ promptInput: '' })
  }

  updateEngine = (e) => {
    console.log(e.target.value)
    this.setState({ engine: e.target.value })
  }

  render = () => {
    return(
      <div className='form'>
        <form onSubmit={this.submitPrompt}>
          <label htmlFor='prompt'>Prompt:</label>
          <input 
            type='text'
            id='prompt'
            name='prompt'
            placeholder='Prompt'
            value={this.state.promptInput}
            onChange={(e) => this.updatePromptInput(e)}
          />
          <p>Choose an engine</p>
          <select
            name='engine'
            value={this.state.engine}
            onChange={(e) => this.updateEngine(e)}
          >
            <option value='text-curie-001'>curie</option>
            <option value='text-davinci-002'>davinci</option>
            <option value='text-babbage-001'>babbage</option>
            <option value='text-ada-001'>ada</option>
          </select>
          <button>Enter</button>
        </form>
      </div>
    )
  }
}

export default Form;