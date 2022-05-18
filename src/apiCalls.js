const apiCalls = {
  postPrompt(newPrompt) {
    let engine
    newPrompt.engine ? engine = newPrompt.engine
      : engine = 'text-curie-001'
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY
    let url = `https://api.openai.com/v1/engines/${engine}/completions`

    console.log(url)
 
    const data = {
      prompt: newPrompt.promptInput,
      temperature: newPrompt.temperature,
      max_tokens: 6,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      echo: true, 
      stream: false,
    }

    return fetch(url, {
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