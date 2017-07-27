import { SEND_EMAIL } from '../actions/index'

export default (state = [], action) => {
  switch(action.type){
    case SEND_EMAIL:
      return action.payload
  }
  return state
}
