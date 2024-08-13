import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const IndexVehicle = () => {
  const [vehicleList, setVehicleList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/myvehicles")
      .then((res) => {
        console.log(res);
        setVehicleList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  // handle edit button

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        setVehicleList((prevVehicles) =>
          prevVehicles.filter((item) => item.ID !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="vehicle-list">
        <table className="table table-bordered responsive m-5 p-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Name</th>
              <th>Vehicle Color</th>
              <th>Vehicle Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicleList.map((item, i) => (
              <tr key={i}>
                <td>{item.ID}</td>
                <td>{item.vehicleName}</td>
                <td>{item.vehicleColor}</td>
                <td>{item.vehicleNumber}</td>
                <td>
                  <Link className="btn  btn-dark" to={`/read/${item.ID}`}>
                    Read
                  </Link>
                  <Link className="btn btn-primary" to={`/edit/${item.ID}`}>
                    Edit
                  </Link>
                  <button
                    className="btn  btn-warning"
                    onClick={() => handleDelete(item.ID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndexVehicle;
