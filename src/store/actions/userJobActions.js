import axios from 'axios';

const url = 'https://api.myjson.com/bins/zatt3';
// const url = 'http://localhost/sample-json/report.json';


export function fetchJob() {
  return function(dispatch) {
    axios({
      method:'get',
      url: url,
      responseType:'json'
    })
    .then((response) => {
      dispatch({
        type: "GET_USER_JOB",
        payload: response.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}


export function clickUser(name) {
  return {
    type: 'CLICK_USER',
    payload: name,
  }
}