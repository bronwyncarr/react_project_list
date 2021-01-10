import React, { useState } from "react";
import { input, Button, Row, RightRow } from "./Styled";

export default function NewProjectForm({ handleSubmit }) {
  const formInput = {
    name: "",
    description: "",
    planned: false,
    completed: false,
    deployed: false,
  };

  const [formData, setFormData] = useState(formInput);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setFormData({
      ...formData,
      status: e.target.value,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <Row>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
      </Row>
      <Row>
        <label>Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          ></input>
      </Row>
      <Row>
          <label>Progress thus far:</label>
          </Row>
      <Row>
        <label>None Yet</label>
        <input
          name="status"
          type="radio"
          value="none"
          onChange={handleCheck}
        ></input>
        <label>Designed</label>
        <input
          name="status"
          type="radio"
          value="design"
          onChange={handleCheck}
        ></input>
				<label>Built</label>
        <input
          name="status"
          type="radio"
          value="build"
          onChange={handleCheck}
        ></input>
				<label>Deployed</label>
        <input
          name="status"
          type="radio"
          value="deploy"
          onChange={handleCheck}
        ></input>
      </Row>
      <RightRow>
        <Button type="submit" value="submit">
          Add Project
        </Button>
      </RightRow>
    </form>
  );
}
