import React, { useEffect } from 'react';
import './App.css';
import { handleInitialData } from './actions/shared';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './components/questions';

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <Router>
      <div className='container'>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            HOLA
            <Route path='/' exact component={Questions}></Route>
          </div>
        )}
      </div>
    </Router>
  );
};
App.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  users: PropTypes.object,
  loading: PropTypes.bool,
};
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
    loading: authedUser === '',
  };
};
export default connect(mapStateToProps)(App);
