import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    catchPhrase: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://661d423c98427bbbef0147c9.mockapi.io/api/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  },[id])
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://661d423c98427bbbef0147c9.mockapi.io/api/" + id, values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="phone"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              name="website"
              className="form-control"
              id="website"
              placeholder="Enter Website Name"
              value={values.website}
              onChange={(e) =>
                setValues({ ...values, website: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              name="companyName"
              className="form-control"
              id="companyName"
              placeholder="Enter Company Name"
              value={values.companyName}
              onChange={(e) =>
                setValues({ ...values, companyName: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="catchPhrase">Catch Phrase:</label>
            <input
              type="text"
              name="catchPhrase"
              className="form-control"
              id="catchPhrase"
              placeholder="Enter Catch Phrase"
              value={values.catchPhrase}
              onChange={(e) =>
                setValues({ ...values, catchPhrase: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
