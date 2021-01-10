import React, { useState } from "react";
import { TextField, Button, Row, RightRow, CheckBox } from "./Styled";

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
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <Row>
        <label>Name:</label>
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></TextField>
      </Row>
      <Row>
        <label>Description:</label>
        <TextField
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></TextField>
      </Row>
      <Row>
        <label>Planned</label>
        <CheckBox
          name="planned"
          type="checkbox"
          checked={formData.planned}
          onChange={handleCheck}
        ></CheckBox>
				<label>Completed</label>
        <CheckBox
          name="completed"
          type="checkbox"
          checked={formData.completed}
          onChange={handleCheck}
        ></CheckBox>
				<label>Deployed</label>
        <CheckBox
          name="deployed"
          type="checkbox"
          checked={formData.deployed}
          onChange={handleCheck}
        ></CheckBox>
      </Row>
      <RightRow>
        <Button type="submit" value="submit">
          Add Project
        </Button>
      </RightRow>
    </form>
  );
}
