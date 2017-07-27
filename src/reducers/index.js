import { combineReducers } from 'redux'

// import AttendeeListReducer from './attendee_list_reducer'
// import ActiveUser from './attendee_details'
import { defaultUsers, currentUser } from './attendee_list_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  attendees : defaultUsers,
  active_user: currentUser,
  form: formReducer
})

export default rootReducer
