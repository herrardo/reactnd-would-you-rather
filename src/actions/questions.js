export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

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
