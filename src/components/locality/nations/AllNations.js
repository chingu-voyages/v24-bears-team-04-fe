import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ANBreadcrumbs from "./ANBreadcrumbs";
import NationSidebar from "./NationSidebar";

const AllNations = () => (
  <>
    <Row className="mt-4 ml-3">
      <Col xl="3" lg="10" md="10" sm="11" className="mb-4">
        <NationSidebar />
      </Col>

      <Col xl="8" lg="10" md="10" sm="11">
        <ANBreadcrumbs />

        <h2>Nations (2)</h2>

        <Card className="mb-4">
          <CardBody>
            <span className="display-4 flag-icon flag-icon-ke mr-5"></span>

            <h4 className="d-inline-block text-uppercase">Kenya</h4>
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <span className="display-4 flag-icon flag-icon-us mr-5"></span>

            <h4 className="d-inline-block text-uppercase">
              United States of America
            </h4>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>
);

export default AllNations;
