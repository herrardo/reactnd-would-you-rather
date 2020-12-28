import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { answerQuestion } from '../actions/questions';
import { userAnswerQuestion } from '../actions/users';

const Question = ({ authedUser, question, questions, users, dispatch }) => {
  const answeredByAuthedUser =
    users && authedUser ? Object.keys(users[authedUser].answers).includes(question.id) : true;
  const handleQuestion = answer => {
    console.log(answer);
    dispatch(answerQuestion({ authedUser, qid: question.id, answer }));
    dispatch(userAnswerQuestion({ authedUser, qid: question.id, answer }));
  };
  return (
    <li className='question' key={question.id}>
      <h3 className='question__title'>Would you rather?</h3>
      <div>
        <Button
          color='primary'
          aria-label={`button ${question.optionOne.text}`}
          variant='contained'
          disabled={answeredByAuthedUser}
          onClick={() => handleQuestion('optionOne')}
        >
          {question.optionOne.text}
        </Button>
        {question.optionOne.votes.includes(authedUser) && <span>My Answer</span>}
      </div>
      <div>
        <Button
          color='primary'
          aria-label={`button ${question.optionTwo.text}`}
          variant='contained'
          disabled={answeredByAuthedUser}
          onClick={() => handleQuestion('optionTwo')}
        >
          {question.optionTwo.text}
        </Button>
        {question.optionTwo.votes.includes(authedUser) && <span>My Answer</span>}
      </div>
    </li>
  );
};

Question.propTypes = {
  authedUser: PropTypes.string,
  question: PropTypes.object,
  questions: PropTypes.object,
  users: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = ({ questions, authedUser, users }, { question }) => ({
  authedUser,
  question,
  questions,
  users,
});

export default connect(mapStateToProps)(Question);
