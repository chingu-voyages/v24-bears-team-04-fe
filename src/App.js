import React from 'react';
import './App.css';
import VoteForm from './components/VoteForm'
import VoteResult from './components/VoteResult'

function App() {
  return (
    <div className="App">
      <VoteForm />
      <VoteResult />
    </div>
  );
}

export default App;
