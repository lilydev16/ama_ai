const apiCalls = {
  postPrompt(newPrompt) {
    let engine
    newPrompt.engine ? engine = newPrompt.engine : engine = 'text-curie-001'
    
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY
    const data = {
      prompt: newPrompt.promptInput,
      temperature: newPrompt.temperature,
      max_tokens: newPrompt.tokens,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      echo: true, 
      stream: false,
    }
    
    console.log(data, engine)
    return fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(data)       
    })
    .then(res => res.json())
    .then(data => data.choices[0].text)
    .catch(error => {
      throw error
    })
  }
}

export default apiCalls;