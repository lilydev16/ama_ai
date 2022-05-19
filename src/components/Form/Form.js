import { useState, useEffect } from 'react';
import './Form.css'

const Form = ({ addPrompt }) => {
  const [promptReq, setPromptReq] = useState(
    JSON.parse(localStorage.getItem('prompt-req')) ||
    {
      prompt: '',
      engine: '',
      temperature: 0.5,
      tokens: 6
    }
  )

  const updatePromptInput = (e) => {
    setPromptReq(promptReq => ({
      ...promptReq, prompt: e.target.value
    }))
  }
  
  const updateEngine = (e) => {
    setPromptReq(promptReq => ({
      ...promptReq, engine: e.target.value
    }))
  }

  const updateTemperature = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)))
    setPromptReq(promptReq => ({
      ...promptReq, temperature: value
    }))
  }

  const updateTokens = (e) => {
    let { value: tokenValue, min, max } = e.target
    tokenValue = Math.max(Number(min), Math.min(Number(max), Number(tokenValue)))
    setPromptReq(promptReq => ({
      ...promptReq, tokens: tokenValue
    }))
  }

  const submitPrompt = (e) => {
    e.preventDefault()
    addPrompt(promptReq)
    clearInputs()
  }

  const clearInputs = () => {
    setPromptReq({ prompt: '', temperature: 0.5, tokens: 6, engine: '' })
  }

  useEffect(() => {
    localStorage.setItem('prompt-req', JSON.stringify(promptReq))
  }, [promptReq])

  return(
    <div className='form'>
      <form onSubmit={submitPrompt}>
        <div>
          <label htmlFor='prompt' className="block text-sm font-medium text-gray-700">
            Prompt
          </label>    
          <div className="mt-1">
            <input
              className='prompt-input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              aria-describedby="prompt"
              type='text'
              id='prompt'
              name='prompt'
              placeholder='How are you?'
              value={promptReq.prompt}
              onChange={(e) => updatePromptInput(e)}
              />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="prompt">
            Ask a question.
          </p>
        </div>


        <div className='settings'>
          <div>
            <select
            className='engine'
              name='engine'
              value={promptReq.engine}
              onChange={(e) => updateEngine(e)}
            >
              <option value=''>Choose an engine</option>
              <option value='text-curie-001'>curie</option>
              <option value='text-davinci-002'>davinci</option>
              <option value='text-babbage-001'>babbage</option>
              <option value='text-ada-001'>ada</option>
            </select>
          </div>
        
          <div className="flex justify-between">
            <p className="block text-sm font-medium text-gray-700">Choose a temperature</p>
            <span className="text-sm text-gray-500" id="temperature">Optional</span>
          </div>
          <div className="mt-1">
            <input
              className='temperature shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              type='number'
              max='1'
              min='0'
              step="0.01"
              name='temperature'
              placeholder='0.4'
              value={promptReq.temperature}
              onChange={(e) => updateTemperature(e)}
              />
          </div>
          <div className="flex justify-between">
            <p className="block text-sm font-medium text-gray-700">Choose max tokens</p>
            <span className="text-sm text-gray-500" id="tokens">Optional</span>
          </div>
          <div className="mt-1">
            <input
              className='tokens shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              type='number'
              max='140'
              min='1'
              name='tokens'
              placeholder='64'
              value={promptReq.tokens}
              onChange={(e) => updateTokens(e)}
              />
          </div>
        </div>
        <div className='button-container'>
          <button>Enter</button>
          <button onClick={() => clearInputs()}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Form;