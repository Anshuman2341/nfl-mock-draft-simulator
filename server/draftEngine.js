import playersData from "./data/players.js";
import teamsData from "./data/teams.js";

class DraftEngine {
  constructor() {
    this.round = 1;
    this.pick = 1;
    this.maxRounds = 4;
    this.maxTeams = 7;

    this.draftOver = false;

    this.teams = JSON.parse(JSON.stringify(teamsData));
    this.availablePlayers = [...playersData];

    this.history = [];
  }


  getCurrentTeam() {
    return this.teams[this.pick - 1];
  }

  makePick(player) {

    if (this.draftOver) {
      throw new Error("Draft is already over");
    }

    const team = this.getCurrentTeam();

    team.picks.push(player);

    this.availablePlayers = this.availablePlayers.filter(
      p => p.id !== player.id
    );

    this.history.push({
      round: this.round,
      pick: this.pick,
      team: team.name,
      player: player.name,
      position : player.position,
    });

    this.nextTurn();
  }

  nextTurn() {
    // If already over, do nothing
    if (this.draftOver) return;

    // Last pick of last round
    if (this.round === this.maxRounds && this.pick === this.maxTeams) {
      this.draftOver = true;
      return;
    }

    // Normal flow
    if (this.pick < this.maxTeams) {
      this.pick++;
    } else {
      this.pick = 1;
      this.round++;
    }
  }


  isDraftOver() {
    return this.round > this.maxRounds;
  }

  resetDraft() {
    this.round = 1;
    this.pick = 1;

    this.teams = JSON.parse(JSON.stringify(teamsData));
    this.availablePlayers = [...playersData];

    this.history = [];
    this.draftOver = false;
  }

  fullReset() {
    this.resetDraft();
  }



  getState() {
    return {
      round: this.round,
      pick: this.pick,
      teams: this.teams,
      availablePlayers: this.availablePlayers,
      history: this.history,
      draftOver: this.draftOver
    };
  }
}

export default DraftEngine;
