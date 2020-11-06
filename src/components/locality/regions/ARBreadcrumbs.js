import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const ARBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Locality
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Nations
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Kenya
        </BreadcrumbItem>

        <BreadcrumbItem active tag="span">
          Regions
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default ARBreadcrumbs;
