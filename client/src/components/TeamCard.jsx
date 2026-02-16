import "./TeamCard.css";

function TeamCard({ team, onSelect }) {
  return (
    <div
      className="team-card"
      onClick={() => onSelect(team.id)}
    >
      <img
        src={team.logo}
        alt={team.name}
        className="team-logo"
      />

      <span className="team-name">
        {team.name}
      </span>
    </div>
  );
}

export default TeamCard;
