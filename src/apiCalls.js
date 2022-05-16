const apiCalls = {
  postPrompt(newPrompt) {
    console.log(newPrompt)
    
    const data = {
      prompt: newPrompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }

    console.log(data)

    // return fetch()
  }
}

export default apiCalls;