import React, { useEffect, useState } from 'react';
import './App.css';
import { handleInitialData } from '../actions/shared';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './page404';
import Questions from './questions';
import Leaderboard from './leaderboard';
import Login from './login';
import Nav from './nav';

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
            <Nav></Nav>
            <Switch>
              <Route path='/reactnd-would-you-rather' exact component={Questions} />
              <Route path='/reactnd-would-you-rather/leaderboard' exact component={Leaderboard} />
              <Route component={Page404} />
            </Switch>
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
