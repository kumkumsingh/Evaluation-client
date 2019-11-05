import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LogInFormComponent from './components/LogInFormComponent'
import ClassFormContainer from './components/ClassFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <h1>Student Evaluations</h1>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={LogInFormComponent} />
    <Route path="/signup" exact component={SignUpFormContainer} />
    <Route path="/batch" exact component={ClassFormContainer} />
    </div>
    </Provider>
  );
}

export default App;
