const PubSub = require('../helpers/pub_sub.js');
const WCDisplayView = require('./wc_display_view.js');

const WCListView = function (container) {
  this.container = container;
}

WCListView.prototype.bindEvents = function () {
  PubSub.subscribe('WorldCup:data-ready', (event) => {
    this.worldcup = event.detail;
    this.render();
  });
};

WCListView.prototype.render = function () {
  this.worldcup.forEach((game) => {
    const wcDisplayView = new WCDisplayView(this.container, game);
    wcDisplayView.render();
  });
};



module.exports = WCListView;
