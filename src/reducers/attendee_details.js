export default (state = [], action) => {
  switch(action.type){
    case 'FETCH_FORM':
      return action.payload
  }
  return state
}
