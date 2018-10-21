const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('WorldCup:rounds-ready', (event) => {
    this.populateSelect(event.detail);
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (rounds) {
  rounds.forEach((round, index) => {
    const option = this.createRoundOption(round, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createRoundOption = function (round, index) {
  const option = document.createElement('option');
  option.textContent = round;
  option.value = index;
  return option;
};

module.exports = SelectView;
