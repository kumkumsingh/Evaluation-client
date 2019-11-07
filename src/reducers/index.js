import { combineReducers } from 'redux'
import Login from './Login'
import SignMessage from './SignMessage'
import Batches from './Batches'
import Batch from './Batch'
import Count from './Count'
import Profile from './Profile'
import RandomStudent from './RandomStudent'

export default combineReducers({
  // reducers will go here
  Login,
  SignMessage,
  Batches,
  Batch,
  Count,
  Profile,
  RandomStudent
})