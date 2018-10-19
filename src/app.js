const WorldCup = require('./models/worldcup.js');
const WCListView = require('./views/wc_list_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const listContainer = document.querySelector('#worldcup-list');
  const wcListView = new WCListView(listContainer);
  wcListView.bindEvents();

  const worldcup = new WorldCup;
  worldcup.getData();
});
