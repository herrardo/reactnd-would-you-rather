import Link from '@material-ui/core/Link';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { answerQuestion } from '../actions/questions';
import { userAnswerQuestion } from '../actions/users';
import { HOMEPAGE } from '../utils/constants';
import { useHistory } from 'react-router-dom';

const Question = ({ authedUser, question, questions, users, dispatch, id }) => {
  question = question || questions[id];
  const history = useHistory();
  const answeredByAuthedUser =
    users && authedUser ? Object.keys(users[authedUser].answers).includes(question.id) : true;
  const handleQuestion = answer => {
    console.log(answer);
    dispatch(answerQuestion({ authedUser, qid: question.id, answer }));
    dispatch(userAnswerQuestion({ authedUser, qid: question.id, answer }));
    handleHistory();
  };
  const handleHistory = () => {
    history.push(`${HOMEPAGE}/questions/${question.id}`);
  };
  return (
    <div>
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
      {id === null && (
        <Button className='question__link' onClick={handleHistory}>
          View Detail
        </Button>
      )}
    </div>
  );
};

Question.propTypes = {
  authedUser: PropTypes.string,
  question: PropTypes.object,
  questions: PropTypes.object,
  users: PropTypes.object,
  dispatch: PropTypes.func,
  id: PropTypes.string,
};

const mapStateToProps = ({ questions, authedUser, users }, props) => {
  const id =
    props.match && props.match.params && props.match.params.id ? props.match.params.id : null;
  const { question } = props;
  return {
    authedUser,
    question,
    questions,
    users,
    id,
  };
};

export default connect(mapStateToProps)(Question);
