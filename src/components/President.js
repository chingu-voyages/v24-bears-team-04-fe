import React from "react";
import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const President = ({ handleChange }) => (
  <FormGroup tag="fieldset">
    <legend>Presidential Elections</legend>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="president"
          value="Barack Obama"
          onChange={handleChange}
        />
        Barack Obama
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="president"
          value="John McCain"
          onChange={handleChange}
        />
        John McCain
      </Label>
    </FormGroup>
  </FormGroup>
);

export default President
