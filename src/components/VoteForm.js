import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import President from "./President";
import Sidebar from "./Sidebar";
import SuccessfulVote from "./SuccessfulVote";

const VoteForm = ({ formChange, formSubmit, voted }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <>
      <Row className="mt-4 ml-3">
        <Col xl="4" lg="10" md="10" sm="11" className="mb-4">
          <Sidebar />
        </Col>

        <Col xl="8" lg="10" md="10" sm="11">
          {voted ? (
            <SuccessfulVote visible={visible} onDismiss={onDismiss} />
          ) : (
            <President onSubmit={formSubmit} handleChange={formChange} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default VoteForm;
