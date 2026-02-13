function DraftHistory({ history }) {
  return (
    <>
      <hr />
      <h2>Draft History</h2>

      {history.map((pick, index) => (
        <div key={index}>
          Round {pick.round}, Pick {pick.pick} —{" "}
          {pick.team} → {pick.player}
        </div>
      ))}
    </>
  );
}

export default DraftHistory;
