const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const isItFriday = today => {
  if (today === "Friday") {
    return "TGIF"; 
  }

  return 'Nope';
}

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

Given('today is Friday', function () {
  this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});