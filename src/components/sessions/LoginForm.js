import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const loginform = ({
  email,
  password,
  onSubmit,
  handleEmail,
  handlePassword,
}) => (
  <Form onSubmit={onSubmit}>
    <h3 className="mb-4">Login</h3>

    <FormGroup>
      <Label>Your Email:</Label>
      <Input type="email" name="email" value={email} onChange={handleEmail} />
    </FormGroup>

    <FormGroup>
      <Label>Your Password:</Label>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
      />
    </FormGroup>

    <Button color="primary" size="lg">
      Login
    </Button>
  </Form>
);

export default loginform;
