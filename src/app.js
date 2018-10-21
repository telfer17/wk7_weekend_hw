const WorldCup = require('./models/worldcup.js');
const WCListView = require('./views/wc_list_view.js');
const SelectView = require ('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('select#round-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#worldcup-list');
  const wcListView = new WCListView(listContainer);
  wcListView.bindEvents();

  const worldcup = new WorldCup;
  worldcup.getData();
});
