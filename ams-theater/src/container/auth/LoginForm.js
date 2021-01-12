import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../Store/actions/auth";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import "../auth/auth.css";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();

    props.login(email, password);

    //Redirect if Logged In
    if (props.isAuthenticated) {
      return <Redirect to="/" />;
    }
  };
  return (
    <div className="Auth">
      <h1>Login</h1>
      <p>Login To Your Account</p>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
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

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
