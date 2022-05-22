import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

const Form = ({ addPrompt }) => {
  const [isEmpty, setEmpty] = useState(false)
  const [promptReq, setPromptReq] = useState(
    JSON.parse(localStorage.getItem('prompt-req')) ||
    {
      prompt: '',
      engine: 'text-curie-001',
      temperature: 0.5,
      tokens: 60
    }
  )

  const updatePromptReq = (e) => {
    setPromptReq(promptReq => ({
      ...promptReq, [e.target.name]: e.target.value
    }))
  }

  const submitPrompt = (e) => {
    e.preventDefault()
    if (promptReq.prompt.trim().length !==0) {
      addPrompt(promptReq)
      clearInputs()
    } else {
      setEmpty(true)
    }
  }

  const clearInputs = () => {
    setPromptReq({ prompt: '', temperature: 0.5, tokens: 60, engine: 'text-curie-001' })
    setEmpty(false)
  }

  useEffect(() => {
    localStorage.setItem('prompt-req', JSON.stringify(promptReq))
  }, [promptReq])

  return(
    <div className='form mt-9 flex justify-center'>
      <form 
        onSubmit={submitPrompt} 
        className='shadow-xl p-5 rounded-md w-3/4'
      >
        <div className='prompt-container mt-4'>
          <label htmlFor='prompt' className='block text-sm font-medium text-gray-700'>
            Ask me a question
          </label>    
          <div className='mt-1 rounded-md shadow-sm'>
            <input
              className='prompt-input block w-full pr-10 border border-indigo-300 text-indigo-900 placeholder-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md px-3 py-2'
              aria-describedby='prompt'
              type='text'
              id='prompt'
              name='prompt'
              placeholder='Who is Malcom X?'
              value={promptReq.prompt}
              onChange={(e) => updatePromptReq(e)}
            />
          </div>        
          {isEmpty && <p className='mt-2 text-sm text-red-600' id='prompt-error'>Please fill in the prompt</p>}
        </div>

        <div className='settings w-full'>
          <div className='engine-container mt-3'>
            <label htmlFor='engine' className='block text-sm font-medium text-gray-700'>
              Engine
            </label>
            <select
              className='engine mt-1 block w-full px-3 pr-10 py-2 text-base border border-indigo-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
              id='engine'
              name='engine'
              value={promptReq.engine}
              onChange={(e) => updatePromptReq(e)}
            >
              <option value='text-curie-001'>curie</option>
              <option value='text-davinci-002'>davinci</option>
              <option value='text-babbage-001'>babbage</option>
              <option value='text-ada-001'>ada</option>
            </select>
          </div>

          <div className='presets'>
            <div className='temperature-container mt-3'>
              <div className='flex justify-between'>
                <label className='block text-sm font-medium text-gray-700'>
                  Temperature
                </label>
                <span className='text-sm text-gray-500' id='temperature'>Optional</span>
              </div>
              <div className='mt-1'>
                <Slider
                  aria-label="Temperature"
                  value={promptReq.temperature}
                  getAriaValueText={() => `Temperature: ${promptReq.temperature}`}
                  marks
                  name="temperature"
                  min={0}
                  max={1}
                  step={0.01}
                  valueLabelDisplay="on"
                  onChange={(e) => updatePromptReq(e)}
                />
              </div>
            </div>
            <div className='token-container mt-3'>
              <div className='flex justify-between'>
                <label className='block text-sm font-medium text-gray-700'>
                  Max Tokens
                </label>
                <span className='text-sm text-gray-500' id='tokens'>Optional</span>
              </div>
              <div className='mt-1'>
                <Slider
                  aria-label="Token Count"
                  value={promptReq.tokens}
                  getAriaValueText={() => `Token Count: ${promptReq.tokens}`}
                  step={10}
                  marks
                  name="tokens"
                  min={10}
                  max={140}
                  valueLabelDisplay="on"
                  onChange={(e) => updatePromptReq(e)}
                />
              </div>
            </div>
          </div>    
        </div>

        <div className='button-container flex flex-row justify-evenly items-center mt-4'>
          <button 
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Enter
          </button>
          <button 
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={() => clearInputs()}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;