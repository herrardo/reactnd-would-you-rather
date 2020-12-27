import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import { handleInitialData } from './actions/shared';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({ dispatch, authedUser, users }) {
  console.log('authed', authedUser);
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div className='App'>
      <div>Authed: {users['sarahedo'].avatarURL}</div>
    </div>
  );
}
App.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  users: PropTypes.object,
};
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};
export default connect(mapStateToProps)(App);
