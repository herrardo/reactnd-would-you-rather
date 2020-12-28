import React, { useEffect, useState } from 'react';
import './App.css';
import { handleInitialData } from '../actions/shared';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './questions';
import Leaderboard from './leaderboard';
import Login from './login';

const App = ({ dispatch, login }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <Router>
      <div className='page'>
        {login ? (
          <Login login={login} />
        ) : (
          <div className='container'>
            HOLA
            <Route path='/reactnd-would-you-rather' exact component={Questions}></Route>
            <Route
              path='/reactnd-would-you-rather/leaderboard'
              exact
              component={Leaderboard}
            ></Route>
          </div>
        )}
      </div>
    </Router>
  );
};
App.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  users: PropTypes.object,
  login: PropTypes.bool,
};
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
    login: authedUser === null,
  };
};
export default connect(mapStateToProps)(App);
