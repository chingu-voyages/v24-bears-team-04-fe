import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const NationForm = () => {
  const [name, setName] = useState("");
  const [isoLongCode, setIsoLongCode] = useState("");
  const [isoShortCode, setIsoShortCode] = useState("");
  const [unCode, setUnCode] = useState("");
  const [telCode, setTelCode] = useState("");
  const [regionType, setRegionType] = useState("");

  const nameChange = (e) => setName(e.target.value);
  const longCodeChange = (e) => setIsoLongCode(e.target.value);
  const shortCodeChange = (e) => setIsoShortCode(e.target.value);
  const unCodeChange = (e) => setUnCode(e.target.value);
  const telCodeChange = (e) => setTelCode(e.target.value);
  const regionTypeChange = (e) => setRegionType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      iso_long_code: isoLongCode,
      iso_short_code: isoShortCode,
      un_code: unCode,
      tel_code: telCode,
      region_type: regionType,
    };

    console.log("You entered: ", data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="mb-4">Nation - New</h2>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" name="name" value={name} onChange={nameChange} />
        </FormGroup>

        <FormGroup>
          <Label>ISO Long Code:</Label>
          <Input
            type="text"
            name="isoLongCode"
            value={isoLongCode}
            onChange={longCodeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>ISO Short Code:</Label>
          <Input
            type="text"
            name="isoShortCode"
            value={isoShortCode}
            onChange={shortCodeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>UN Code:</Label>
          <Input
            type="text"
            name="unCode"
            value={unCode}
            onChange={unCodeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Tel Code:</Label>
          <Input
            type="text"
            name="telCode"
            value={telCode}
            onChange={telCodeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Type of Regions available: </Label>
          <Input
            type="select"
            name="regionType"
            value={regionType}
            onChange={regionTypeChange}
          >
            <option value="state">State Only</option>
            <option value="county">County Only</option>
          </Input>
        </FormGroup>

        <Button color="primary" size="lg">
          Create
        </Button>
      </Form>
    </>
  );
};

export default NationForm;
