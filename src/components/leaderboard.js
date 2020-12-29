import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderUsers } from '../selectors';
import { Avatar } from '@material-ui/core';

const Leaderboard = ({ orderedUsers }) => {
  return (
    <div className='leaderboard'>
      <h3 className='center'>Leaderboard</h3>
      <ul className='leaderboard-list'>
        {Object.values(orderedUsers).map(user => (
          <li className='leaderboard-list__item' key={user.id}>
            <h3>{user.name}</h3>
            <Avatar src={user.avatarURL} className='avatar' />
            <div className='leaderboard-list__result'>
              Total: <span className='total'>{user.interactions.total}</span>
            </div>
            <div className='leaderboard-list__result'>
              Number of questions: {user.interactions.questions}
            </div>
            <div className='leaderboard-list__result'>
              Number of answers: {user.interactions.answers}
            </div>
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
