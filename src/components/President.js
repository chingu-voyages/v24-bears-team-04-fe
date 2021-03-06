import React from "react";
import { Button, Form, Input, Label, FormGroup } from "reactstrap";
import "./FunkyDiv.scss";

const President = ({ onSubmit, handleChange }) => (
  <Form onSubmit={onSubmit}>
    <FormGroup className="funkyradio">
      <FormGroup className="funkyradio-success">
        <Input
          type="radio"
          name="president"
          id="president-1"
          value="Barack Obama"
          onChange={handleChange}
        />
        <Label for="president-1">
          <span className="text-uppercase">Barack Obama</span>
          <span className="d-block">Democratic Party</span>
        </Label>
      </FormGroup>

      <FormGroup className="funkyradio-success">
        <Input
          type="radio"
          name="president"
          id="president-2"
          value="John McCain"
          onChange={handleChange}
        />
        <Label for="president-2">
          <span className="text-uppercase">John McCain</span>
          <span className="d-block">Republican Party</span>
        </Label>
      </FormGroup>
    </FormGroup>

    <Button color="success" size="lg" className="shadow-sm mt-3 ">
      Vote
    </Button>
  </Form>
);

export default President;
