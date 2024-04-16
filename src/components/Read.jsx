import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
   useEffect(() => {
     axios
      .get("https://661d423c98427bbbef0147c9.mockapi.io/api/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 mb-2 rounded">
        <h2>Detail of User</h2>
        <div className="mb-2">
          <strong>Name: </strong>
          {data.name}
        </div>
        <div className="mb-2">
          <strong>Username: </strong>
          {data.username}
        </div>
        <div className="mb-2">
          <strong>Email: </strong>
          {data.email}
        </div>
        <div className="mb-2">
          <strong>Phone: </strong>
          {data.phone}
        </div>
        <div className="mb-2">
          <strong>Website: </strong>
          {data.website}
        </div>
        <div className="mb-2">
          <strong>Company Name: </strong>
          {data.companyName}
        </div>
        <div className="mb-2">
          <strong>Catch Phrase: </strong>
          {data.catchPhrase}
        </div>
        <Link to={`/update/${id}`} className="btn btn-success mt-2">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3 mt-2">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
