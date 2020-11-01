import React, { useState } from "react";
import {
  Badge,
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
          <Row className="w-100 d-flex jusitfy-content-between">
            <Col md="2">
              <NavbarBrand href="/">MY CHOICE</NavbarBrand>
              <NavbarToggler onClick={toggle} />
            </Col>

            <Collapse isOpen={!isOpen} navbar>
              <Col md="9">
                <Nav className="d-flex justify-content-between" navbar>
                  <NavItem>
                    <NavLink to="/feed" className="nav-link">
                      Feed
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#" className="nav-link">
                      My Constituency
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#" className="nav-link">
                      My Representatives
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#" className="nav-link">
                      Notifications
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>

              <Col md="2" className="mx-auto">
                <div className="profile">
                  <span className="d-block">Guest</span>
                  <Badge color="info">
                    <small>Voter</small>
                  </Badge>
                </div>
              </Col>
            </Collapse>
          </Row>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
