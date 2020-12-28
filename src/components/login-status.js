import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authedUser';

const LoginStatus = ({ authedUser, users, dispatch }) => {
  const user = users[authedUser] || null;
  const handleLogout = () => {
    dispatch(setAuthedUser(null));
  };
  return (
    <>
      {user ? (
        <div>
          <div>{user.name}</div>
          <Button color='inherit' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <Button color='inherit'>Login</Button>
      )}
    </>
  );
};
LoginStatus.propTypes = {
  users: PropTypes.object,
  authedUser: PropTypes.string,
  dispatch: PropTypes.func,
};
const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});
export default connect(mapStateToProps)(LoginStatus);
