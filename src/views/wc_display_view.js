const WCDisplayView = function (container, game) {
  this.container = container;
  this.game = game;
};

WCDisplayView.prototype.render = function () {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game');

  const homeTeam = this.createHomeHeading();
  gameContainer.appendChild(homeTeam);

  const awayTeam = this.createAwayHeading();
  gameContainer.appendChild(awayTeam);

  const score = this.createScore();
  gameContainer.appendChild(score);

  // const home11 = this.createHomeTeam()
  // this.container.appendChild(home11)

  this.container.appendChild(gameContainer);
};

WCDisplayView.prototype.createHomeHeading = function () {
  const homeTeam = document.createElement('h2');
  homeTeam.classList.add('team-name');
  homeTeam.textContent = this.game.home_team.country;
  return homeTeam;
};

WCDisplayView.prototype.createAwayHeading = function () {
  const awayTeam = document.createElement('h2');
  awayTeam.classList.add('team-name');
  awayTeam.textContent = this.game.away_team.country;
  return awayTeam;
};

WCDisplayView.prototype.createScore = function () {
  const score = document.createElement('h3');
  score.classList.add('result');
  score.textContent = `${this.game.home_team.goals} - ${this.game.away_team.goals}`;
  return score;
};

// WCDisplayView.prototype.createHomeTeam = function (players) {
//   const ul = document.createElement('ul')
//   players.forEach((player) => {
//     const listItem = document.createElement('li')
//     listItem.textContent = player
//     ul.appendChild(listItem)
//   })
//   return ul
// };


module.exports = WCDisplayView;
