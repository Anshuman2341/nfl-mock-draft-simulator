import { useEffect, useState } from "react";

import DraftHeader from "./components/DraftHeader";
import PlayerList from "./components/PlayerList";
import DraftHistory from "./components/DraftHistory";

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetchState();
  }, []);

  const fetchState = async () => {
    const res = await fetch("http://localhost:5000/api/state");
    const data = await res.json();
    setState(data);
  };

  const makePick = async (playerId) => {
    await fetch("http://localhost:5000/api/pick", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ playerId })
    });

    fetchState();
  };

  if (!state) return <h2>Loading...</h2>;

  const currentTeam = state.teams[state.pick - 1];

  return (
    <div style={{ padding: "20px" }}>
      <h1>NFL Mock Draft Simulator</h1>

      <DraftHeader
        round={state.round}
        pick={state.pick}
        team={currentTeam.name}
      />

      <PlayerList
        players={state.availablePlayers}
        onPick={makePick}
      />

      <DraftHistory history={state.history} />
    </div>
  );
}

export default App;
