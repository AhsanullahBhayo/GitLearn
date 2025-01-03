import React, { useEffect, useState } from "react";
import "../addUser/add.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  const { id } = useParams();
  const users = {
    fname: "",
    lname: "",
    email: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, user)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })

      .catch((error) => console.log(error));
  };
  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="Enter First Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            value={user.lname}
            onChange={inputChangeHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={inputChangeHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
