import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props}></Component>
      ) : (
        <Redirect to="/login"></Redirect>
      )
    }
  ></Route>
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration
});

export default connect(mapStateToProps)(PrivateRoute);
