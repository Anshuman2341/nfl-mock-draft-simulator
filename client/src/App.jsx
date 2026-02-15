import { useEffect, useState, useRef } from "react";
import DraftHeader from "./components/DraftHeader";
import PlayerList from "./components/PlayerList";
import DraftHistory from "./components/DraftHistory";
import EndDraft from "./components/EndDraft";


function App() {
  const [state, setState] = useState(null);
  const [userTeamId, setUserTeamId] = useState(null);
  const [aiPicks, setAiPicks] = useState([]);

  // Prevent multiple AI calls
  const aiRunning = useRef(false);

  // Fetch state on load
  useEffect(() => {
    fetchState();
  }, []);

  // AI turn handler
  useEffect(() => {
    if (!state) return;
    if (!userTeamId) return;
    if (state.round > 4) return;

    const currentTeam = state.teams[state.pick - 1];

    // 👉 If it's USER turn → Fetch AI Analysis
    if (currentTeam.id === userTeamId) {
      console.log("User Turn → Fetching Analysis");
      fetchAnalysis();
      return;
    }

    // 👉 If it's AI turn → Run AI Pick
    if (
      currentTeam.id !== userTeamId &&
      !aiRunning.current
    ) {

      setAiPicks([]); // clear old data

      aiRunning.current = true;

      setTimeout(async () => {
        await runAIPick();
        aiRunning.current = false;
      }, 1500);
    }

  }, [state, userTeamId]);


  const fetchState = async () => {
    const res = await fetch("http://localhost:5000/api/state");
    const data = await res.json();
    setState(data);
  };

  const runAIPick = async () => {
    await fetch("http://localhost:5000/api/ai-pick", {
      method: "POST"
    });

    fetchState();
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
  const resetDraft = async () => {
    await fetch("http://localhost:5000/api/reset-draft", {
      method: "POST"
    });

    fetchState();
  };

  const fullReset = async () => {
    await fetch("http://localhost:5000/api/full-reset", {
      method: "POST"
    });

    setUserTeamId(null);
    fetchState();
  };


  // Pass Ai Analysis To the Frontend 

  const fetchAnalysis = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/ai-analysis",
        { method: "POST" }
      );

      const data = await res.json();

      if (data.players && data.players.length > 0) {
        setAiPicks(data.players);
      } else {
        setAiPicks([]);
      }

    } catch (err) {
      console.error("Analysis Error:", err);
      setAiPicks([]);
    }
  };




  // Team selection screen
  if (!state) return <h2>Loading...</h2>;

  if (!userTeamId) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Select Your Team</h1>
        <h1>NFL Mock Draft Simulator</h1>
        {state.teams.map(team => (
          <button
            key={team.id}
            style={{ display: "block", margin: "10px" }}
            onClick={() => setUserTeamId(team.id)}
          >
            {team.name}
          </button>
        ))}
      </div>
    );
  }

  const currentTeam = state.teams[state.pick - 1];

  return (
    <div style={{ padding: "20px" }}>
      <h1>NFL Mock Draft Simulator</h1>

      <DraftHeader
        round={state.round}
        pick={state.pick}
        team={currentTeam.name}
        onReset={resetDraft}
        onSelectTeam={fullReset}
        aiPicks={aiPicks}
      />


      {state.draftOver ? (

        <EndDraft />

      ) : (

        <PlayerList
          players={state.availablePlayers}
          onPick={makePick}
          disabled={currentTeam.id !== userTeamId}
        />

      )}


      <DraftHistory history={state.history} />
    </div>
  );
}

export default App;
