import React from "react";
import { Card, CardBody } from "reactstrap";
import ARBreadcrumbs from "./ARBreadcrumbs";

const AllRegions = () => (
  <>
    <ARBreadcrumbs />

    <h2>Regions (4)</h2>

    <Card className="mb-4">
      <CardBody>
        <h4 className="d-inline-block text-uppercase">Mombasa</h4>

        <h6>KE-001 | Mombasa</h6>
      </CardBody>
    </Card>

    <Card className="mb-4">
      <CardBody>
        <h4 className="d-inline-block text-uppercase">Kwale</h4>

        <h6>KE-002 | Kwale</h6>
      </CardBody>
    </Card>

    <Card className="mb-4">
      <CardBody>
        <h4 className="d-inline-block text-uppercase">Kilifi</h4>

        <h6>KE-003 | Kilifi</h6>
      </CardBody>
    </Card>

    <Card className="mb-4">
      <CardBody>
        <h4 className="d-inline-blok text-uppercase">Tana River</h4>

        <h6>KE-004 | Hola</h6>
      </CardBody>
    </Card>
  </>
);

export default AllRegions;
