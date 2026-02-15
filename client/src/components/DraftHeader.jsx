import Button from "@mui/material/Button";

function DraftHeader({
  round,
  pick,
  team,
  onReset,
  onSelectTeam,
  aiPicks
}) {
  return (
    <>
      <h2>
        Round {round} | Pick {pick}
      </h2>

      <div style={{ marginBottom: "20px" }}>

        <Button
          variant="contained"
          onClick={onReset}
          style={{ marginRight: "10px" }}
        >
          🔄 Reset Draft
        </Button>

        <Button
          variant="contained"
          onClick={onSelectTeam}
        >
          🏈 Select Team
        </Button>

      </div>

      <h3>Current Team: {team}</h3>

      <hr />
    </>
  );
}

export default DraftHeader;
