import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Fade, Backdrop, makeStyles, ButtonGroup, Button } from '@material-ui/core';
import { setAuthedUser } from '../actions/authedUser';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Login = ({ dispatch, authedUser, users, login }) => {
  const classes = useStyles();
  const selectUser = userId => {
    dispatch(setAuthedUser(userId));
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={login}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <div className='login'>
          <h2 id='transition-modal-title'>Choose and user to login</h2>
          <ButtonGroup
            orientation='vertical'
            color='primary'
            aria-label='vertical contained primary button group'
            variant='contained'
            style={{ width: '100%' }}
          >
            {Object.values(users).map(user => (
              <Button key={user.id} onClick={() => selectUser(user.id)}>
                {user.name}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Fade>
    </Modal>
  );
};
Login.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  users: PropTypes.object,
  login: PropTypes.bool,
};
const mapStateToProps = ({ authedUser, users }, { login }) => {
  return {
    authedUser,
    users,
    login,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    setAuthedUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
