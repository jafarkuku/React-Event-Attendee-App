import { ADD_POSTCODE } from '../actions/index'

const INITIAL_STATE = {
			"guestList": [
				{
					"name": "John Jameson"
				},
				{
					"name": "Sam Stuarts"
				},
				{
					"name": "Matt Michaels",
					"email": "matt@michaels.com"
				}
			],
			"activeUser": {}
	}

export const defaultUsers = (state = INITIAL_STATE, action) => {
	  switch (action.type) {
	    case 'UPDATE_EMAIL':
	      const newguestList = state.guestList.map(user => {
	        if (user.name === action.payload.userName) {
	          return {
	            ...user,
	            email: action.payload.userEmail
	          }
	        }
	        return user
	      })

				return {
				 guestList: newguestList,
				 activeUser: newguestList.filter(guest => guest.name === action.payload.userName)[0]
				}

			case ADD_POSTCODE:
				return {...state, postdetails: action.payload}

	    default:
	      return state
	  }
}


export const currentUser = (state = INITIAL_STATE.activeUser, action) => {
  switch(action.type){
    case 'FETCH_FORM':
      return action.payload

		default:
		  return state
  }
}
