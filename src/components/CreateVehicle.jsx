import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateVehicle = () => {
  const [input, setInput] = useState({
    vehicleName: "",
    vehicleColor: "",
    vehicleNumber: "",
  });

  const [vehicleList, setVehicleList] = useState([]);

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.vehicleName || !input.vehicleColor || !input.vehicleNumber) {
      alert("All fields are required");
    } else {
      await axios
        .post("http://localhost:8081/myvehicles", input)
        .then((res) => {
          console.log(res);
          setVehicleList([...vehicleList, input]);
          setInput({
            vehicleName: "",
            vehicleColor: "",
            vehicleNumber: "",
          });
          navigate("/view");
        })
        .catch((err) => console.log(err));
    }

    console.log("vehicle has been added", input);
  };
  return (
    <div>
      <div className="container mt-5 col-md-6">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="vehicleName">
            <Form.Label>Name of the vehicle</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInput}
              name="vehicleName"
              value={input.vehicleName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="vehicleColor">
            <Form.Label>Color of the vehicle</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInput}
              name="vehicleColor"
              value={input.vehicleColor}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="vehicleNumber">
            <Form.Label>Number of the vehicle</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInput}
              name="vehicleNumber"
              value={input.vehicleNumber}
            />
          </Form.Group>

          <Button
            className="mt-3"
            variant="primary"
            size="lg"
            block="block"
            type="submit"
          >
            Add Vehicle
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateVehicle;
