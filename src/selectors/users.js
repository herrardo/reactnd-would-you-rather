export const orderUsers = ({ users }) => {
  return Object.values(users)
    .map(user => ({
      ...user,
      interactions: Object.keys(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.interactions - a.interactions);
};
