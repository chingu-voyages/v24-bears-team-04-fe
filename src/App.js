import React, { useState } from 'react';
import './App.css';
import VoteForm from './components/VoteForm'
import Header from './components/Header'

function App() {
  const myChoiceApiVoteURL = 'https://mychoice-api.herokuapp.com/api/vote'
  const [hasVoted, setHasVoted] = useState(false)
  const [value, setValue] = useState("")

  const handleChange = e => {
    setValue(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    let data = { candidate_name: value }
    const myRequestInit = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    }


    fetch(myChoiceApiVoteURL, myRequestInit)
      .then( response => response.json() )
      .then( data => {
        console.log('Vote submitted successfully: ', data);
        setHasVoted(true)
      })
      .catch( error => {
        console.log('Error submitting vote.. ', error)
      })
  }



  return (
    <div className="App">
      <Header />
      <VoteForm
        formChange={ handleChange }
        formSubmit={ handleSubmit }
        voted={ hasVoted }/>
    </div>
  );
}

export default App;
