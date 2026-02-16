import teamsConfig from "../data/teamsConfig";
import TeamCard from "./TeamCard";
import "./Teams.css";

function Teams({ onSelectTeam }) {
  return (
    <div className="teams-wrapper">
      <div className="teams-header">
        <h2>Select Your Team</h2>
        <p>Pick one NFL team to draft for</p>
      </div>
      {teamsConfig.map(team => (
        <TeamCard
          key={team.id}
          team={team}
          onSelect={onSelectTeam}
        />
      ))}
    </div>
  );
}

export default Teams;
