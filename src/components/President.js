import React from "react";
import { Button, Form } from "reactstrap";
import "./FunkyDiv.scss";

const President = ({ onSubmit, handleChange }) => (
  <Form onSubmit={onSubmit}>
    <div className="funkyradio">
      <div className="funkyradio-success">
        <input
          type="radio"
          name="president"
          id="president-1"
          value="Barack Obama"
          onChange={handleChange}
        />
        <label for="president-1">
          <span className="text-uppercase">Barack Obama</span>
          <span className="d-block">Democratic Party</span>
        </label>
      </div>

      <div className="funkyradio-success">
        <input
          type="radio"
          name="president"
          id="president-2"
          value="John McCain"
          onChange={handleChange}
        />
        <label for="president-2">
          <span className="text-uppercase">John McCain</span>
          <span className="d-block">Republican Party</span>
        </label>
      </div>
    </div>

    <Button color="success" size="lg" className="shadow-sm mt-3 ">
      Vote
    </Button>
  </Form>
);

export default President;
