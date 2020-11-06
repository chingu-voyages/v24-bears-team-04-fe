import React from "react";
import { Card, CardBody } from "reactstrap";
import ANBreadcrumbs from "./ANBreadcrumbs";
import { NavLink } from "react-router-dom";

const AllNations = () => {
  return (
    <>
      <ANBreadcrumbs />

      <h2>Nations (2)</h2>

      <Card className="mb-4">
        <CardBody>
          <NavLink to="/regions">
            <span className="display-4 flag-icon flag-icon-ke mr-5"></span>

            <h4 className="d-inline-block text-uppercase">Kenya</h4>
          </NavLink>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <NavLink to="/regions">
            <span className="display-4 flag-icon flag-icon-us mr-5"></span>

            <h4 className="d-inline-block text-uppercase">
              United States of America
            </h4>
          </NavLink>
        </CardBody>
      </Card>
    </>
  );
};

export default AllNations;
