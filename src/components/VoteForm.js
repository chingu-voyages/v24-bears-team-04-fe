import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from "reactstrap";
import President from './President'
import VoteResult from './VoteResult'

const VoteForm = ({ formChange, formSubmit, voted }) => {
    if (voted) {
    return (
      <>
        <Container>
         <Row>
          <div className='mt-4 mb-2 alert alert-success' >
            <h4>Your vote is safe with us</h4>
          </div>
         </Row>

        <Row>
          <VoteResult />
        </Row>
        </Container>
      </>
    )
  }


  return (
    <Container>
      <Col md="6" id="col">
        <Form onSubmit={ formSubmit }>
          <President handleChange={ formChange } />
          <Button color="success" size="lg" shadow="lg">Vote</Button>
        </Form>
      </Col>
    </Container>
  )
}

export default VoteForm;
