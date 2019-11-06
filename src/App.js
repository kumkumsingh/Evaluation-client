import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LogInFormComponent from './components/LogInFormComponent'
import ClassFormContainer from './components/ClassFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'
import Home from './components/Home'
import CreateBatchFormContainer from './components/CreateBatchFormContainer'
import ClassDetailsContainer from './components/ClassDetailsContainer'
import AddStudentFormContainer from './components/AddStudentFormContainer'
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
    <Route path="/batch" exact component={CreateBatchFormContainer} />
    <Route path="/batch/:id" exact component={ClassDetailsContainer} />
    <Route path="/batch/:id" exact component={AddStudentFormContainer} />
    </div>
    </Provider>
  );
}

export default App;
