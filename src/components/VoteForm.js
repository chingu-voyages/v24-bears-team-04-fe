import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Col,
} from "reactstrap";
import President from './President'

const VoteForm = () => {
  const [value, setValue] = useState("")

  const handleChange = e => {
    setValue(e.target.value)
  }
  
  const handleSubmit = e => {
    alert("A name was submitted: " + value);
    e.preventDefault();
  }

  return (
    <Container>
      <Col md="6">
        <Form onSubmit={handleSubmit}>
          <President handleChange={handleChange} />
          <Button color="primary">Submit</Button>
        </Form>
      </Col>
    </Container>
  )
}

export default VoteForm;
