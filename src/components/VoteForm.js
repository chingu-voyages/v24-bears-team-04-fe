import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Col
} from "reactstrap";
import President from './President'

const VoteForm = () => {
  const [value, setValue] = useState("")

  const handleChange = e => {
    setValue(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    let data = { candidate_name: value }
    const mychoiceApiURL = 'https://mychoice-api.herokuapp.com/api/vote';
    const myRequestInit = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    }

    const hideForm = (form) => {
      form.style.display = 'none';
    }

    const createAlert = (color, msg) => {
      const alertDiv = document.createElement('div');
      color = `alert-${color}`
      alertDiv.classList.add('alert', color);
      alertDiv.innerHTML = msg;
      return alertDiv;
    }

    fetch(mychoiceApiURL, myRequestInit)
      .then( response => response.json() )
      .then( data => {
        console.log('Vote submitted successfully: ', data);
        const form = document.forms[0];
        const col = document.getElementById('col');
        let msg = 'You have voted successfully';
        const resultAlert = createAlert('success', msg);
        hideForm(form);
        col.appendChild(resultAlert);
      })
      .catch( error => {
        console.log('Error submitting vote.. ', error)
        const col = document.getElementById('col');
        let msg = 'Something went wrong with submitting your vote..';
        const resultAlert = createAlert('danger', msg);
        col.appendChild(resultAlert);
      })
  }


  return (
    <Container>
      <Col md="6" id="col">
        <Form onSubmit={handleSubmit}>
          <President handleChange={handleChange} />
          <Button color="primary">Submit</Button>
        </Form>
      </Col>
    </Container>
  )
}

export default VoteForm;
