export const orderUsers = ({ users }) => {
  return Object.values(users)
    .map(user => ({
      ...user,
      interactions: {
        answers: Object.keys(user.answers).length,
        questions: user.questions.length,
        total: Object.keys(user.answers).length + user.questions.length,
      },
    }))
    .sort((a, b) => b.interactions.total - a.interactions.total);
};
