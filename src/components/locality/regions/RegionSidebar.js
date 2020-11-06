import React from "react";
import { Card, CardBody, Nav, NavItem } from "reactstrap";
import { NavLink, useRouteMatch } from "react-router-dom";

const RegionSidebar = () => {
  let { url } = useRouteMatch();

  return (
    <>
      <Card color="light" className="h-100">
        <CardBody className="text-xl-right">
          <h3>Regions Management</h3>
          <Nav className="flex-column">
            <NavItem>
              <NavLink to="/nations/regions">All</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to={`${url}/new`}>New</NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </>
  );
};

export default RegionSidebar;
