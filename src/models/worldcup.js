const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const WorldCup = function () {
  this.wcData = [];
  this.rounds = [];
}

WorldCup.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const wcindex = event.detail;
    this.publishGamesByRound(wcindex);
  })
};

WorldCup.prototype.getData = function () {
  const url = 'https://worldcup.sfg.io/matches';
  const request = new RequestHelper(url);
  request.get().then((data) => {
    this.data = data;
    PubSub.publish('WorldCup:data-ready', this.data);
  })
};

WorldCup.prototype.publishRounds = function (data) {
  this.wcData = data;
  this.rounds = this.uniqueRounds();
  PubSub.publish('WorldCup:rounds-ready', this.rounds)
};

WorldCup.prototype.roundList = function () {
  const fullList = this.wcData.map(round => round.stage_name);
  return fullList;
};

WorldCup.prototype.uniqueRounds = function () {
  return this.roundList().filter((round, index, array) => {
    return array.indexOf(round) === index;
  })
};

WorldCup.prototype.gamesByRound = function (roundIndex) {
  const selectedRound = this.rounds[roundIndex]
  return this.wcData.filter((round) => {
    return round.stage_name === selectedRound;
  })
};

WorldCup.prototype.publishGamesByRound = function (roundIndex) {
  const allRounds = this.gamesByRound(roundIndex);
  PubSub.publish('WorldCup:rounds-ready', allRounds);
};


module.exports = WorldCup;
