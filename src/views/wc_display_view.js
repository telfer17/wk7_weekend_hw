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

  // const home_eleven = this.createHomeTeam();
  // gameContainer.appendChild(home_eleven);

  this.container.appendChild(gameContainer);
};

WCDisplayView.prototype.createHomeHeading = function () {
  const homeTeam = document.createElement('h2');
  homeTeam.classList.add('home-name');
  homeTeam.textContent = this.game.home_team.country;
  return homeTeam;
};

WCDisplayView.prototype.createAwayHeading = function () {
  const awayTeam = document.createElement('h2');
  awayTeam.classList.add('away-name');
  awayTeam.textContent = this.game.away_team.country;
  return awayTeam;
};

WCDisplayView.prototype.createScore = function () {
  const score = document.createElement('h2');
  score.classList.add('result');
  score.textContent = `${this.game.home_team.goals} - ${this.game.away_team.goals}`;
  return score;
};

// WCDisplayView.prototype.createHomeTeam = function (players) {
//   const home_lineup = this.game.home_team_statistics.starting_eleven;
//   const names = home_lineup.map(player => player.name);
//   home_lineup.forEach(player => {
//     let li = document.createElement('li');
//     li.textContent = player.name;
//     return home_lineup
//   })
// };


module.exports = WCDisplayView;
