import React, { useState } from "react";
import SuccessfulLogin from "./SuccessfulLogin";
import LoginForm from "./LoginForm";

import { Col, Row } from "reactstrap";

const Login = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => {
    console.log("Toggle for dismiss clicked");
    setVisible(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { email: email, password: password };

    console.log("You entered: ", data);
    setLoggedIn(true);
  };

  return (
    <>
      <Row className="mt-4 ml-2">
        <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-8 mx-auto">
          {loggedIn ? (
            <SuccessfulLogin visible={visible} onDismiss={onDismiss} />
          ) : (
            <LoginForm
              onSubmit={handleSubmit}
              email={email}
              handleEmail={emailChange}
              password={password}
              handlePassword={passwordChange}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Login;
