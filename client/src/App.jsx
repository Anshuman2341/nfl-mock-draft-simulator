import { useEffect, useState, useRef } from "react";

import Layout from "./components/layout/Layout";
import SelectionSection from "./components/sections/SelectionSection";
import DraftSection from "./components/sections/DraftSection";
import './App.css'

function App() {

  const [state, setState] = useState(null);
  const [userTeamId, setUserTeamId] = useState(null);
  const [aiPicks, setAiPicks] = useState([]);
  const [page, setPage] = useState("selection");

  const aiRunning = useRef(false);

  /* ---------------- FETCH STATE ---------------- */

  useEffect(() => {
    fetchState();
  }, []);

  const fetchState = async () => {
    const res = await fetch("http://localhost:5000/api/state");
    const data = await res.json();
    setState(data);
  };

  /* ---------------- AI HANDLER ---------------- */

  useEffect(() => {

    if (!state || !userTeamId) return;
    if (state.round > 4) return;

    const currentTeam = state.teams[state.pick - 1];

    if (currentTeam.id === userTeamId) {
      fetchAnalysis();
      return;
    }

    if (!aiRunning.current) {

      aiRunning.current = true;

      setTimeout(async () => {
        await runAIPick();
        aiRunning.current = false;
      }, 1500);
    }

  }, [state, userTeamId]);

  // Page handle 

  const handleTeamSelect = (teamId) => {
    setUserTeamId(teamId);
    setPage("draft");
  };


  /* ---------------- API CALLS ---------------- */

  const runAIPick = async () => {
    await fetch("http://localhost:5000/api/ai-pick", {
      method: "POST"
    });

    fetchState();
  };

  const makePick = async (playerId) => {

    await fetch("http://localhost:5000/api/pick", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    setPage("selection");

    fetchState();
  };

  const fetchAnalysis = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/ai-analysis",
        { method: "POST" }
      );

      const data = await res.json();

      setAiPicks(data.players || []);

    } catch {
      setAiPicks([]);
    }
  };

  /* ---------------- RENDER ---------------- */

  if (!state) return <h2>Loading...</h2>;

  return (

    <Layout>

      {/* PAGE 1: TEAM SELECTION */}
      {page === "selection" && (

        <SelectionSection
          onSelectTeam={handleTeamSelect}
          players={state.availablePlayers}
        />

      )}


      {/* PAGE 2: DRAFT SIMULATOR */}
      {page === "draft" && userTeamId && (

        <DraftSection
          state={state}
          userTeamId={userTeamId}
          aiPicks={aiPicks}
          onPick={makePick}
          onReset={resetDraft}
          onFullReset={fullReset}
        />

      )}

    </Layout>
  );
}

export default App;
