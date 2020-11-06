import React from "react";
import { Col, Row } from "reactstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import RegionSidebar from "./RegionSidebar";
import AllRegions from "./AllRegions";
import RegionForm from "./RegionForm";

const Region = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Row className="mt-4 ml-3">
        <Col xl="3" lg="10" md="10" sm="11" className="mb-4">
          <RegionSidebar />
        </Col>

        <Col xl="8" lg="10" md="10" sm="11">
          <Switch>
            <Route exact path={path}>
              <AllRegions />
            </Route>

            <Route path={`${path}/new`}>
              <RegionForm />
            </Route>
          </Switch>
        </Col>
      </Row>
    </>
  );
};

export default Region;
