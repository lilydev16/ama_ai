import { useState, useEffect } from 'react';
import './Form.css'

const Form = ({ addPrompt }) => {
  const [prompt, setPrompt] = useState('')
  const [engine, setEngine] = useState('')
  const [temperature, setTemperature] = useState(0.5)
  const [tokens, setTokens] = useState(6)

  // constructor() {
  //   super()
  //   this.state = {
  //     promptInput: '',
  //     engine: '',
  //     temperature: 0.5,
  //     tokens: 6
  //   }
  // }

  const updatePromptInput = (e) => {
    setPrompt(e.target.value)
    // this.setState({ promptInput: e.target.value })
  }
  
  const submitPrompt = (e) => {
    e.preventDefault()
    // const newPrompt = { id: Date.now(), ...this.state }
    // this.props.addPrompt(newPrompt)
    // this.clearInputs()
    const newPrompt = { id: Date.now() }
    console.log('new>>>>>>', newPrompt)
    addPrompt(newPrompt)
    clearInputs()
  }

  const clearInputs = () => {
    // this.setState({ promptInput: '', temperature: 0.5, tokens: 6 })
    setPrompt('')
    setTemperature(0.5)
    setTokens(6)
  }

  const updateEngine = (e) => {
    // this.setState({ engine: e.target.value })
    setEngine(e.target.value)
  }

  const updateTemperature = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)))
    // this.setState({ temperature: value })
    setTemperature(value)
  }

  const updateTokens = (e) => {
    let { value: tokenValue, min, max } = e.target
    tokenValue = Math.max(Number(min), Math.min(Number(max), Number(tokenValue)))
    // this.setState({ tokens: tokenValue })
    setTokens(tokenValue)
  }

  return(
    <div className='form'>
      <form onSubmit={submitPrompt}>
        <label htmlFor='prompt'>Prompt:</label>
        <input
          className='prompt-input'
          type='text'
          id='prompt'
          name='prompt'
          placeholder='Prompt'
          value={prompt}
          onChange={(e) => updatePromptInput(e)}
        />
        <p>Choose an engine</p>
        <select
          name='engine'
          value={engine}
          onChange={(e) => updateEngine(e)}
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
          value={temperature}
          onChange={(e) => updateTemperature(e)}
        />
        <p>Choose max tokens</p>
        <input
          className='tokens-input'
          type='number'
          max='140'
          min='1'
          name='tokens'
          placeholder='64'
          value={tokens}
          onChange={(e) => updateTokens(e)}
        />
        <button>Enter</button>
      </form>
    </div>
  )
}

export default Form;