import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import VoteForm from "./VoteForm";
import Login from "./sessions/Login";

export default function App() {
  const myChoiceApiVoteURL = "https://mychoice-api.herokuapp.com/api/vote";
  const [hasVoted, setHasVoted] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { candidate_name: value };
    const myRequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(myChoiceApiVoteURL, myRequestInit)
      .then((response) => response.json())
      .then((data) => {
        console.log("Vote submitted successfully: ", data);
        setHasVoted(true);
      })
      .catch((error) => {
        console.log("Error submitting vote.. ", error);
      });
  };
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <VoteForm
            formChange={handleChange}
            formSubmit={handleSubmit}
            voted={hasVoted}
          />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
