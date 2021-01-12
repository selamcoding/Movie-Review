import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import ImageRab from "../Imag/imgControler";
import importComponent from "../../HOC/asynchComponent";
import Login from "../auth/LoginForm";
import ControlerSingalMovie from "../movie/contSingal";
import Register from "../auth/Register";
import Alert from "../../container/layout/Alert";
import { logout } from "../../Store/actions/auth";
import About from "../about/about";
import { connect } from "react-redux";
import ShowComment from "../ShowComment/ShowComment";

const asycNewmovie = importComponent(() => {
  return import("../NewMovie/NewMovie");
});

class Nav extends Component {
  render() {
    const authLinks = (
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-new-movie">
              ADD-New-Movies
            </Link>
          </li>
        </ul>
        <Link
          className=" btn btn-outline-success"
          onClick={this.props.logout}
          to="/"
        >
          Logout
        </Link>
      </div>
    );

    const guestLinks = (
      <div className="collapse navbar-collapse">
        <Link className="btn btn-outline-success" to="/register">
          Singup
        </Link>
        <Link className=" btn btn-outline-success" to="/login">
          Login
        </Link>
      </div>
    );
    return (
      <div>
        <header>
          <nav className="   btn btn-warning disabled navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className=" text-warning navbar-brand" to="/">
              <img
                src="https://www.stepchange.org/portals/0/assets/icon/line-04.png"
                width="40"
                height="40"
                alt="movies.com"
              />
              Movies-4YOU
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" container collapse navbar-collapse"
              id="navbarColor02"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to=" ">
                    TOP-Movies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              {!this.props.loading && (
                <div>
                  {this.props.auth.isAuthenticated ? authLinks : guestLinks}
                </div>
              )}
            </div>
          </nav>
          <Alert />

          {
            <Switch>
              <Route exact path="/" component={ImageRab} />;
              <Route exact path="/about" component={About} />
              <Route exact path="/add-new-movie" component={asycNewmovie} />;
              <Route exact path="/Login" component={Login} />;
              <Route exact path="/register" component={Register} />;
              <Route exact path="/Ima/:id" component={ControlerSingalMovie} />
              <Route exact path="/comments/:id" component={ShowComment} />
            </Switch>
          }
        </header>
      </div>
    );
  }
}

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapstateToProps = (state) => {
  return {
    adminLoging: state.admin.admin,
    auth: state.auth,
  };
};

export default connect(mapstateToProps, { logout })(Nav);
