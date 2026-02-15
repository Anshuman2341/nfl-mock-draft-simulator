import PlayerCard from "./PlayerCard";

function PlayerList({ players, onPick, disabled }) {
  return (
    <div>
      {players.map(player => (
        <PlayerCard
          key={player.id}
          player={player}
          onPick={onPick}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default PlayerList;
