import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { faHourglassEnd, faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => (
  <Card>
    <CardHeader>
      <h3>US General Elections 2020-2024</h3>
    </CardHeader>

    <CardBody>
      <h4>
        <span className="font-weight-bold">Presidential Race </span>- National
      </h4>
      <div>
        <h6>
          <FontAwesomeIcon icon={faHourglassEnd} className="text-primary" />{" "}
          Voting Ends in 8 Hours
        </h6>
      </div>

      <div>
        <h6>
          <FontAwesomeIcon icon={faVoteYea} className="text-primary" /> 153
          Million - Total Votes Cast
        </h6>
      </div>
    </CardBody>
  </Card>
);

export default Sidebar;
