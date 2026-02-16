import React from "react";
import "./DraftHistory.css";

function DraftHistory({ history }) {
  const TOTAL_ROUNDS = 4;

  // Get unique team names from history (since old code only has history)
  const teams = [...new Set(history.map((pick) => pick.team))];

  return (
    <div className="draft-history-container">
      <h2 className="draft-history-title">Draft Board</h2>

      <div className="draft-table-wrapper">
        <table className="draft-table">
          
          {/* HEADER */}
          <thead>
            <tr>
              <th className="round-header">Round</th>
              {teams.map((team) => (
                <th key={team}>{team}</th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {[...Array(TOTAL_ROUNDS)].map((_, index) => {
              const roundNumber = index + 1;

              return (
                <tr key={roundNumber}>
                  <td className="round-cell">
                    Round {roundNumber}
                  </td>

                  {teams.map((team) => {
                    const pick = history.find(
                      (h) =>
                        h.round === roundNumber &&
                        h.team === team
                    );

                    return (
                      <td key={team}>
                        {pick
                          ? `${pick.player}${pick.position ? ` ; ${pick.position}` : ""}`
                          : "—"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default DraftHistory;
