import { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      promptInput: ''
    }
  }

  updatePromptInput = (e) => {
    this.setState({ promptInput: e.target.value })
  }

  render = () => {
    return(
      <div className='form'>
        <form>
          <label htmlFor='prompt'>Prompt:</label>
          <input 
            type='text'
            id='prompt'
            name='prompt'
            placeholder='Prompt'
            value={this.state.promptInput}
            onChange={(e) => this.updatePromptInput(e)}
          />
          <button>Enter</button>
        </form>
      </div>
    )
  }
}

export default Form;