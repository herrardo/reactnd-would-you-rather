import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, TextField, Chip } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { useHistory } from 'react-router-dom';
import { HOMEPAGE } from '../utils/constants';

const NewQuestion = ({ authedUser, dispatch }) => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [questionAdded, setQuestionAdded] = useState(false);
  const history = useHistory();
  const handleHistory = () => {
    history.push(HOMEPAGE);
  };
  const handleInput1 = e => {
    setOption1(e.target.value);
  };
  const handleInput2 = e => {
    setOption2(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      handleSaveQuestion({
        optionOneText: option1,
        optionTwoText: option2,
        author: authedUser,
      }),
    );
    setOption1('');
    setOption2('');
    setQuestionAdded(true);
    setTimeout(() => {
      setQuestionAdded(false);
      handleHistory();
    }, 500);
  };
  return (
    <div className='add-question'>
      <h3>Would you rather?</h3>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <div>
          <TextField label='Option 1' variant='filled' value={option1} onChange={handleInput1} />
        </div>
        <div>
          <TextField label='Option 2' variant='filled' value={option2} onChange={handleInput2} />
        </div>
        <Button
          type='submit'
          className='question__add'
          color='primary'
          variant='contained'
          size='small'
        >
          Add Question
        </Button>
        {questionAdded && (
          <div>
            <Chip label='Question successfully added' disabled variant='outlined' />
          </div>
        )}
      </form>
    </div>
  );
};
NewQuestion.propTypes = {
  authedUser: PropTypes.string,
  dispatch: PropTypes.func,
};
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewQuestion);
