import React from "react";
import { Alert, Row } from "reactstrap";
import VoteResult from "./VoteResult";

const SuccessfulVote = ({ visible, onDismiss }) => (
  <>
    <Row>
      <Alert color="success" isOpen={visible} toggle={onDismiss} fade={false}>
        <h4>Your vote is safe with us</h4>
      </Alert>
    </Row>

    <Row>
      <VoteResult />
    </Row>
  </>
);

export default SuccessfulVote;
