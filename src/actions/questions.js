export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const answerQuestion = ({ qid, answer, authedUser }) => ({
  type: ANSWER_QUESTION,
  qid,
  answer,
  authedUser,
});

export const saveQuestion = question => ({
  type: SAVE_QUESTION,
  question,
});
