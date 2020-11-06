import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const RegionForm = () => {
  const [name, setName] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [regionSize, setRegionSize] = useState("");
  const [population, setPopulation] = useState("");
  const [capital, setCapital] = useState("");
  const [regionType, setRegionType] = useState("");

  const nameChange = (e) => setName(e.target.value);
  const regionCodeChange = (e) => setRegionCode(e.target.value);
  const regionSizeChange = (e) => setRegionSize(e.target.value);
  const populationChange = (e) => setPopulation(e.target.value);
  const capitalChange = (e) => setCapital(e.target.value);
  const regionTypeChange = (e) => setRegionType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      region_code: regionCode,
      region_size: regionSize,
      population: population,
      capital: capital,
      region_type: regionType,
    };

    console.log("You entered: ", data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="mb-4">Region - New</h2>

        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" name="name" value={name} onChange={nameChange} />
        </FormGroup>

        <FormGroup>
          <Label>Region Code:</Label>
          <Input
            type="text"
            name="regionCode"
            value={regionCode}
            onChange={regionCodeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            Region Size: (KM<sup>2</sup>)
          </Label>
          <Input
            type="number"
            name="regionSize"
            value={regionSize}
            onChange={regionSizeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Last Population Size:</Label>
          <Input
            type="number"
            name="population"
            value={population}
            onChange={populationChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Capital:</Label>
          <Input
            type="text"
            name="capital"
            value={capital}
            onChange={capitalChange}
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
            <option value="state">State</option>
            <option value="county">County</option>
          </Input>
        </FormGroup>

        <Button color="primary" size="lg">
          Create
        </Button>
      </Form>
    </>
  );
};

export default RegionForm;
