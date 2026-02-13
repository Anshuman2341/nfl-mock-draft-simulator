import PlayerCard from "./PlayerCard";

function PlayerList({ players, onPick }) {
  return (
    <>
      <h2>Available Players</h2>

      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          onPick={onPick}
        />
      ))}
    </>
  );
}

export default PlayerList;
