import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ReadVehicle = () => {
  const { id } = useParams();

  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/` + id)
      .then((res) => {
        console.log(res);
        setVehicleList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Vehicle Details</h2>
        <h3>{vehicleList.ID}</h3>
        <h3>{vehicleList.vehicleName}</h3>
        <h3>{vehicleList.vehicleColor}</h3>
        <h3>{vehicleList.vehicleNumber}</h3>
        <Link to={`/view`} className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ReadVehicle;
