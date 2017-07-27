import AkkrooAPI from '../akkroo_api'

export const FETCH_FORM = 'FETCH_FORM'
export const SEND_EMAIL = 'SEND_EMAIL'
export const ADD_POSTCODE = 'ADD_POSTCODE'

export const fetchform = user => {
  return{
    type: FETCH_FORM,
    payload: user
  }
}

export const updateEmail = (userName, userEmail) => {
  return {
    type: 'UPDATE_EMAIL',
    payload: { userName, userEmail }
  }
}

export const addPostalDetails = (postcode, opt_in) => {
  return {
    type: ADD_POSTCODE,
    payload: {
      postcode: postcode,
      opt_in: opt_in
    }
  }
}

export const dispatchForm = (userEmail, templateName, userName) => {
  return {
    type: SEND_EMAIL,
    payload: window.AkkrooAPI.sendEmail(userEmail, templateName, userName)
  }
}
