import React from "react";
import { Alert, Row } from "reactstrap";

const SuccessfulLogin = ({ visible, onDismiss }) => (
  <>
    <Row>
      <Alert color="success" isopen={visible} toggle={onDismiss} fade={false}>
        <h4>Welcome back Comrade!</h4>
      </Alert>
    </Row>
  </>
);

export default SuccessfulLogin;
