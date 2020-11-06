import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const ANBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Locality
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Nations
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default ANBreadcrumbs;
