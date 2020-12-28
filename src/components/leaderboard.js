import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderUsers } from '../selectors';

const Leaderboard = ({ orderedUsers }) => {
  return (
    <div className='users'>
      <h3 className='center'>List of questions</h3>
      <ul className='dashboard-list'>
        {Object.values(orderedUsers).map(user => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <h3>{user.interactions}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

Leaderboard.propTypes = {
  orderedUsers: PropTypes.object,
};

const mapStateToProps = state => {
  const orderedUsers = orderUsers(state);
  return {
    orderedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
