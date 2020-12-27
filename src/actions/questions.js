export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const receiveQuestions = tweets => ({
  type: RECEIVE_QUESTIONS,
  tweets,
});
