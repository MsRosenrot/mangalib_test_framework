import axios from 'axios';
import { Given } from '@wdio/cucumber-framework';

// Given(/^I send GET request to (.*)$/, async function(url){
//     let response = await axios({
//         method: 'Get',
//         url: url,
//         headers: {
//                 accept: "application/json",
//                 'Content-Type': "application/json"
//             },
//     })
//     const world = this
//     world.response = response
// })
Given(/^I send GET request to (.*)$/, async function (url) {
  let response;
  try {
    response = await axios({
      method: 'Get',
      url,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    response = error.response;
  }
  const world = this;
  world.response = response;
});
