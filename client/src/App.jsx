import { useEffect, useState, useRef } from "react";

import Layout from "./components/layout/Layout";
import SelectionSection from "./components/sections/SelectionSection";
import DraftSection from "./components/sections/DraftSection";
import "./App.css";

// Backend URL from Vercel Environment Variable
const API_URL = import.meta.env.VITE_API_URL;

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
    try {
      const res = await fetch(`${API_URL}/api/state`);
      const data = await res.json();
      setState(data);
    } catch (err) {
      console.error("Failed to fetch state:", err);
    }
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

  /* ---------------- PAGE HANDLER ---------------- */

  const handleTeamSelect = (teamId) => {
    setUserTeamId(teamId);
    setPage("draft");
  };

  /* ---------------- API CALLS ---------------- */

  const runAIPick = async () => {
    await fetch(`${API_URL}/api/ai-pick`, {
      method: "POST",
    });

    fetchState();
  };

  const makePick = async (playerId) => {
    await fetch(`${API_URL}/api/pick`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId }),
    });

    fetchState();
  };

  const resetDraft = async () => {
    await fetch(`${API_URL}/api/reset-draft`, {
      method: "POST",
    });

    fetchState();
  };

  const fullReset = async () => {
    await fetch(`${API_URL}/api/full-reset`, {
      method: "POST",
    });

    setUserTeamId(null);
    setPage("selection");

    fetchState();
  };

  const fetchAnalysis = async () => {
    try {
      const res = await fetch(`${API_URL}/api/ai-analysis`, {
        method: "POST",
      });

      const data = await res.json();

      setAiPicks(data.players || []);
    } catch (err) {
      console.error("AI analysis failed:", err);
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
