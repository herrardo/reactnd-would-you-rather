import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './question';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
import './questions.css';

const Questions = ({ questions, authedUser, users }) => {
  const [answered, setAnswered] = useState(false);
  const toggleAnswered = () => {
    setAnswered(!answered);
  };
  const answeredQuestionsByAuthedUser = Object.keys(users[authedUser].answers);
  const filteredQuestions = Object.values(questions)
    .filter(question => {
      return answered
        ? answeredQuestionsByAuthedUser.includes(question.id)
        : !answeredQuestionsByAuthedUser.includes(question.id);
    })
    .sort((a, b) => a.timestamp - b.timestamp);
  return (
    <div className='questions'>
      <h3 className='center'>
        List of {answered ? <span>answered</span> : <span>unanswered</span>} questions{' '}
      </h3>
      <FormControlLabel
        control={
          <Switch checked={answered} onChange={toggleAnswered} name='checkedB' color='primary' />
        }
        label='Answered Questions'
      />
      <ul className='questions-list'>
        {filteredQuestions.map(question => (
          <li key={question.id}>
            <Question question={question} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.object,
  users: PropTypes.object,
  authedUser: PropTypes.string,
};

const mapStateToProps = ({ questions, authedUser, users }) => ({
  questions,
  authedUser,
  users,
});

export default connect(mapStateToProps)(Questions);
