import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://661d423c98427bbbef0147c9.mockapi.io/api")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  },[]);
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete this?");
    if (confirm) {
      axios
        .delete(`https://661d423c98427bbbef0147c9.mockapi.io/api/${id}`)
        .then(() => {
            location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link
                    to={`/read/${user.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${user.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger"
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
}

export default Home;
