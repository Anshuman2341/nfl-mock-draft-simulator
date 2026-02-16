import "./Top10.css";

function Top10({ players }) {
  if (!players || players.length === 0) {
    return <p className="loading">Loading prospects...</p>;
  }

  const topTenPlayers = [...players]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 10);

  return (
    <div className="top10-wrapper">

      {/* Header */}
      <div className="top10-header">
        <h2>Top 10 Prospects</h2>
        <p>Big Board Rankings</p>
      </div>

      <div className="spacer" />

      {/* Players */}
      <div className="top10-list">
        {topTenPlayers.map((player) => (
          <div key={player.id} className="player-row">

            {/* Rank */}
            <div className="rank">
              #{player.rank}
            </div>

            {/* Name + School */}
            <div className="name-section">
              <div className="player-name">
                {player.name}
              </div>
              <div className="school">
                {player.school || "N/A"}
              </div>
            </div>

            {/* Grade */}
            <div className="column">
              <span className="label">Grade</span>
              <span className="value">{player.grade || "--"}</span>
            </div>

            {/* Position */}
            <div className="column">
              <span className="label">Pos</span>
              <span className="value">{player.position}</span>
            </div>

            {/* Height */}
            <div className="column">
              <span className="label">Ht</span>
              <span className="value">{player.height || "--"}</span>
            </div>

            {/* Weight */}
            <div className="column">
              <span className="label">Wt</span>
              <span className="value">{player.weight || "--"}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Top10;
