export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const userAnswerQuestion = ({ qid, answer, authedUser }) => ({
  type: USER_ANSWER_QUESTION,
  qid,
  answer,
  authedUser,
});
