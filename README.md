# Fun with AI

## Overview

Have you ever used the [OpenAI](https://beta.openai.com/overview) API? If not here's a chance to play around with a cool AI technology in this React application. Try asking the AI a question and see what response you get back. After inputing text as a prompt, the AI will generate a text completion that attempts to match whatever context or pattern given. If you give the API a prompt like “Write a tagline for an ice cream shop”, it will return a completion such as “We serve up smiles with every scoop!” Read more about the AI in the [docs](https://beta.openai.com/docs/guides/completion/introduction).

Try changing the settings to see if the AI will generate different responses.

[Fun with AI](https://shopify-fun-ai.herokuapp.com/)

# Learning Goals
- React fundamentals
- React Hooks
- Local storage
- APIs
- Asychronus JavaScript
- Tailwind CSS

# Getting Started
To get a local copy up and running follow these simple steps:

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:lswatson16/fun_with_ai.git
   ```
2. cd into the root directory
    ```sh
   cd fun_with_ai
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to see the application in the browser
   ```sh
   npm start
   ``` 
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - The page will reload if you make edits.

# Challenges and Wins
I haven't had much practice with React hooks so implementing local storage with hooks was a huge win for me. It was important that I get the application working first with a few features (eg. adding presets and ability to change the engine, temperature, and max tokens). Once that was complete, I created a feature branch called `feature/local-storage` to convert all class components to functional components with React hooks. On this feature branch, I implemented local storage using the React hooks, `useState` and `useEffect`. See [branch](https://github.com/lswatson16/fun_with_ai/tree/feature/local-storage) here.

This was the first time I implemented local storage. I found this article, [Local Storage in React](https://www.robinwieruch.de/local-storage-react/), very helpful. After implementing local storage to the form, I realized I needed to add an additonal button to reset the form to create a better user experience.

Somthing I want to improve on as a front end developer is design. I believe I accomplished a clean design using Tailwind CSS and plan to use Tailwind in future projects.

Here's some other helpful articles:
- [Using React useState with an object](https://blog.logrocket.com/using-react-usestate-object/)
- [Returning Object Literals from Arrow Functions in JavaScript](https://mariusschulz.com/blog/returning-object-literals-from-arrow-functions-in-javascript)

# Features

The user can enter a prompt to ask the AI a question like "What's today's date?". When the AI responds, the messages between the user and AI are displayed in a list from newest to oldest. The messages and input values persist on the page even when the page reloads due to local storage.

The form allows the user to play around with the settings for the engine, temperature, and max tokens. 
If a user doesn't want to change the settings, then the default engine is `Curie` and the request body will send these presets to the API:
- temperature: 0.5
- max tokens: 6

# Future Additions
- Favoriting messages between the user and AI
- Example prompts that the user can easily copy and paste into the form to get started using the application.
- Narrowing down an audience/niche and specific topics to ask the AI
- Removing persisted messages from local storage
- Styling:
    - Adding css animation to the AI response text
    - Clean design

# Technologies Used
- React
- Javascript
- HTML/CSS
- Tailwind CSS
- Lighthouse (Chrome Dev Tools)
- React Dev Tools (Chrome Dev Tools)

# Deployment
Skip installation by using this deployment link to view the application: [Fun with AI](https://shopify-fun-ai.herokuapp.com/)
- The application was deployed using [Heroku](https://www.heroku.com/).

# Contributors
- [Lauralyn Watson](https://github.com/lswatson16)

# Credits
- [OpenAI](https://beta.openai.com/overview)
- [Create React App](https://create-react-app.dev/)
- [Favicon generator](https://favicon.io/favicon-generator/)
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroku](https://www.heroku.com/)