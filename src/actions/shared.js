import { getInitialData, saveQuestionAnswer, saveQuestionRequest } from '../utils/api';
import { answerQuestion, receiveQuestions, saveQuestion } from './questions';
import { receiveUsers, userAnswerQuestion, userQuestion } from './users';

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

export const handleSaveQuestion = info => {
  return dispatch => {
    return saveQuestionRequest(info)
      .then(question => {
        return dispatch(saveQuestion(question));
      })
      .then(({ question }) => {
        return dispatch(userQuestion({ authedUser: question.author, qid: question.id }));
      })
      .catch(e => {
        console.warn('Error in saving question : ', e);
        console.warn('There was an error saving the question. Try again.');
      });
  };
};
