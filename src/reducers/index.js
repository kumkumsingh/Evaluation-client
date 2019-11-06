import { combineReducers } from 'redux'
import Login from './Login'
import SignMessage from './SignMessage'
import Batches from './Batches'
import Batch from './Batch'

export default combineReducers({
  // reducers will go here
  Login,
  SignMessage,
  Batches,
  Batch
})