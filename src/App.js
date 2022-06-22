import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import apiCalls from './apiCalls';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  const [error, setError] = useState('')
  const [texts, setTexts] = useState(
    JSON.parse(localStorage.getItem('texts')) || [])

  const addPrompt = (newPrompt) => {
    apiCalls.postPrompt(newPrompt)
      .then(textData => {
        setTexts([textData, ...texts])
      })
      .catch(err => {
        setError(`Oops... Something went wrong. Our team is working on fixing the issue`)
      })
  }

  useEffect(() => {
    localStorage.setItem('texts', JSON.stringify(texts))
  }, [texts])

  return (
    <div className='flex flex-col h-screen'>
      {error ? <p className='error'>{error}</p> :
        <>
          <Header />
          <Form addPrompt={addPrompt} />
          <List texts={texts} />
          <Footer />
        </>
      }
    </div>
  )
}

export default App;
