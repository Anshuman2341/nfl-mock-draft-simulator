function PlayerCard({ player, onPick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px"
      }}
    >
      <span>
        #{player.rank} {player.name} ({player.position})
      </span>

      <button onClick={() => onPick(player.id)}>
        Draft
      </button>
    </div>
  );
}

export default PlayerCard;
