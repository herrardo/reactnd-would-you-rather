import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { answerQuestion, receiveQuestions } from './questions';
import { receiveUsers, userAnswerQuestion } from './users';

export const handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
};

export const handleAnswerQuestion = info => {
  return dispatch => {
    return saveQuestionAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
      .then(() => dispatch(userAnswerQuestion(info)))
      .catch(e => {
        console.warn('Error in saving question answer: ', e);
        console.warn('There was an error saving the answer for the question. Try again.');
      });
  };
};
