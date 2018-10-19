const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const WorldCup = function () {
  this.wcData = [];
}

WorldCup.prototype.getData = function () {
  const url = 'https://worldcup.sfg.io/matches';
  const request = new RequestHelper(url);
  request.get().then((data) => {
    this.data = data;
    PubSub.publish('WorldCup:data-ready', this.data);
  })
};


module.exports = WorldCup;
