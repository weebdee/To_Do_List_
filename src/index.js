import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// const login = (username, password) => {
//   fetch(
//     'http://abdyko.tmweb.ru/api/token/',
//     {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//           username: username,
//           password: password,
//         })
//     }
//   ).then(response => {
//     return response.json()
//   }).then(jsonData => {
//     console.log(jsonData);
//   })
// } 

// login('diana', 'penguin56')

// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3MDYyNjc3LCJpYXQiOjE2NDcwMTk0NzcsImp0aSI6ImUwYjhiNjVlMDg3ZTRlZmFhNzQzODBiNjIyOGU3ZGU2IiwidXNlcl9pZCI6MjJ9.bXtGDnjrKIj_ztkgeJudVELVCzkaV2yLWnAykoGDLlQ"


// const getTodos = () => {
//   fetch(
//     'http://abdyko.tmweb.ru/api/v1/todo/',
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3MDYyNjc3LCJpYXQiOjE2NDcwMTk0NzcsImp0aSI6ImUwYjhiNjVlMDg3ZTRlZmFhNzQzODBiNjIyOGU3ZGU2IiwidXNlcl9pZCI6MjJ9.bXtGDnjrKIj_ztkgeJudVELVCzkaV2yLWnAykoGDLlQ'
//       }
//     }
//   )
//   .then(response => response.json())
//   .then(todos => console.log(todos))
// }

// getTodos()

ReactDOM.render(<App />,
  document.getElementById('root'));
