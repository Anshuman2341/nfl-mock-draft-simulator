function PlayerCard({ player, onPick, disabled }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>{player.position}</p>
      <p>Rank: {player.rank}</p>

      <button
        disabled={disabled}
        onClick={() => onPick(player.id)}
      >
        Pick
      </button>
    </div>
  );
}

export default PlayerCard;
