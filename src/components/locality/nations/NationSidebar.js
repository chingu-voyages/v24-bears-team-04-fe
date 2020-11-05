import React from "react";
import { Card, CardBody, Nav, NavItem, NavLink } from "reactstrap";

const NationSidebar = () => (
  <Card color="light" className="h-100">
    <CardBody className="text-right">
      <h3>Nations Management</h3>
      <Nav className="flex-column">
        <NavItem>
          <NavLink href="">All</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="">New</NavLink>
        </NavItem>
      </Nav>
    </CardBody>
  </Card>
);

export default NationSidebar;
