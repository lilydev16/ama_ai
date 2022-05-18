import { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      promptInput: '',
      engine: '',
      temperature: 0.5,
      tokens: 6
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
    this.setState({ promptInput: '', temperature: 0.5, tokens: 6 })
  }

  updateEngine = (e) => {
    this.setState({ engine: e.target.value })
  }

  updateTemperature = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)))
    this.setState({ temperature: value })
  }

  updateTokens = (e) => {
    let { value: tokenValue, min, max } = e.target
    tokenValue = Math.max(Number(min), Math.min(Number(max), Number(tokenValue)))
    this.setState({ tokens: tokenValue })
  }

  render = () => {
    return(
      <div className='form'>
        <form onSubmit={this.submitPrompt}>
          <label htmlFor='prompt'>Prompt:</label>
          <input
            className='prompt-input'
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
          <p>Choose a temperature</p>
          <input
            className='temperature-input'
            type='number'
            max='1'
            min='0'
            step="0.01"
            name='temperature'
            placeholder='0.4'
            value={this.state.temperature}
            onChange={(e) => this.updateTemperature(e)}
          />
          <p>Choose max tokens</p>
          <input
            className='tokens-input'
            type='number'
            max='140'
            min='1'
            name='tokens'
            placeholder='64'
            value={this.state.tokens}
            onChange={(e) => this.updateTokens(e)}
          />
          <button>Enter</button>
        </form>
      </div>
    )
  }
}

export default Form;