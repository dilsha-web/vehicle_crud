import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/` + id)
      .then((res) => {
        console.log(res);
        setInput({
          ...input,
          vehicleName: res.data[0].vehicleName,
          vehicleColor: res.data[0].vehicleColor,
          vehicleNumber: res.data[0].vehicleNumber,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [input, setInput] = useState({
    vehicleName: "",
    vehicleColor: "",
    vehicleNumber: "",
  });

  const [vehicleList, setVehicleList] = useState([]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/update/` + id, input)
      .then((res) => {
        console.log(res);
        setInput({
          vehicleName: "",
          vehicleColor: "",
          vehicleNumber: "",
        });
        navigate("/view");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container mt-5 col-md-6">
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Name of the vehicle</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setInput({ ...input, vehicleName: e.target.value });
              }}
              name="vehicleName"
              value={input.vehicleName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Color of the vehicle</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setInput({ ...input, vehicleColor: e.target.value });
              }}
              name="vehicleColor"
              value={input.vehicleColor}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Number of the vehicle</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setInput({ ...input, vehicleNumber: e.target.value });
              }}
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
            Update Vehicle
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditVehicle;
