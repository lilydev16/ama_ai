const apiCalls = {
  postPrompt(newPrompt) {
    const url = 'https://api.openai.com/v1/engines/text-curie-001/completions'
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY
    const data = {
      prompt: newPrompt,
      temperature: 0.5,
      max_tokens: 6,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      echo: true, 
      stream: false,
      // n: 1
    }

    console.log(JSON.stringify(data))

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(data)       
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.choices[0].text)
      return data.choices[0].text
    })
  }
}

export default apiCalls;