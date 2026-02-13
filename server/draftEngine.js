import playersData from "./data/players.js";
import teamsData from "./data/teams.js";

class DraftEngine {
  constructor() {
    this.round = 1;
    this.pick = 1;
    this.maxRounds = 4;

    // Deep copy (important)
    this.teams = JSON.parse(JSON.stringify(teamsData));
    this.availablePlayers = [...playersData];

    this.history = [];
  }

  getCurrentTeam() {
    return this.teams[this.pick - 1];
  }

  makePick(player) {
    const team = this.getCurrentTeam();

    team.picks.push(player);

    this.availablePlayers = this.availablePlayers.filter(
      p => p.id !== player.id
    );

    this.history.push({
      round: this.round,
      pick: this.pick,
      team: team.name,
      player: player.name
    });

    this.nextTurn();
  }

  nextTurn() {
    if (this.pick < 7) {
      this.pick++;
    } else {
      this.pick = 1;
      this.round++;
    }
  }

  isDraftOver() {
    return this.round > this.maxRounds;
  }

  getState() {
    return {
      round: this.round,
      pick: this.pick,
      teams: this.teams,
      availablePlayers: this.availablePlayers,
      history: this.history
    };
  }
}

export default DraftEngine;
