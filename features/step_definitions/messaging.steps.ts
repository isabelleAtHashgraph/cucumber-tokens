import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { expect } from 'chai';

let createdMessage: string;
let getResponse: any;
let response: any;

Given('a get-message is created', async function () {
  const result = await axios.get('http://localhost:3000');
  createdMessage = result.data;
});

When('the get-message is sent', async function () {
  getResponse = await axios.get('http://localhost:3000');
});

Then(
  'the get-response should contain {string}',
  function (expectedResponse: string) {
    expect(getResponse.data).to.contain(expectedResponse);
  },
);

Given('a post-message is created', async function () {
  const result = await axios.post('http://localhost:3000');
  createdMessage = result.data;
});

When('the post-message is sent', async function () {
  response = await axios.post('http://localhost:3000');
});

Then(
  'the response should contain {string}',
  function (expectedResponse: string) {
    expect(response.data).to.contain(expectedResponse);
  },
);

Then('the created post-message should be returned', function () {
  expect(response.data).to.equal(createdMessage);
});
