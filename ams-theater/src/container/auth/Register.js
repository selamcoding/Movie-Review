import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../Store/actions/alert";
import { register } from "../../Store/actions/auth";
import axios from "axios";
import PropTypes from "prop-types";

const Register = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== password2) {
      props.setAlert("Password do not match", "danger");
    } else {
      props.register({ firstName, lastName, email, password });
      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);

        const response = await axios.post("/register", body, config);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  //Redirect to home page
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Auth">
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={(event) => onChange(event)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => onChange(event)}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(event) => onChange(event)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
