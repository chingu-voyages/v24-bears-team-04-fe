import React from "react";
import { Col, Row } from "reactstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import NationSidebar from "./NationSidebar";
import AllNations from "./AllNations";
import NationForm from "./NationForm";

const Nation = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Row className="mt-4 ml-3">
        <Col xl="3" lg="10" md="10" sm="11" className="mb-4">
          <NationSidebar />
        </Col>

        <Col xl="8" lg="10" md="10" sm="11">
          <Switch>
            <Route exact path={path}>
              <AllNations />
            </Route>
            <Route path={`${path}/new`}>
              <NationForm />
            </Route>
          </Switch>
        </Col>
      </Row>
    </>
  );
};

export default Nation;
