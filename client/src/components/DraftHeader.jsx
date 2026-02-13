function DraftHeader({ round, pick, team }) {
  return (
    <>
      <h2>
        Round {round} | Pick {pick}
      </h2>

      <h3>Current Team: {team}</h3>

      <hr />
    </>
  );
}

export default DraftHeader;
