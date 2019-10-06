export default function reducer(state={
    job: [{
      name: null,
      job: null,
    }],
    error: null,
  }, action) {

    switch (action.type) {
      case "GET_USER_JOB": {
        return {state, job: action.payload}
      }         
      case "CLICK_USER": {
        console.log(action.payload)        
        return {state, name: action.payload}
      }
      case "SET_USER_JOB": {
        return {state, age: action.payload}
      }    
    }

    return state
}