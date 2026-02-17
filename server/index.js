import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import DraftEngine from "./draftEngine.js";
import { getAIPick } from "./aiService.js";


const app = express();

app.use(cors());
app.use(express.json());

const port =process.env.PORT || 5000;
const draft = new DraftEngine();

app.get("/api/state", (req, res) => {
  res.json(draft.getState());
});

app.post("/api/pick", (req, res) => {
  const { playerId } = req.body;

  const player = draft.availablePlayers.find(
    p => p.id === playerId
  );

  if (!player) {
    return res.status(400).json({ error: "Invalid player" });
  }

  draft.makePick(player);
  res.json(draft.getState());
});

app.post("/api/ai-pick", async (req, res) => {
  const team = draft.getCurrentTeam();

  const aiResult = await getAIPick(
    team,
    draft.availablePlayers
  );

  // Fallback: highest ranked player
  let player = draft.availablePlayers.find(
    p => p.name === aiResult
  );

  if (!player) {
    player = draft.availablePlayers.sort(
      (a, b) => a.rank - b.rank
    )[0];
  }

  try {
    draft.makePick(player);
    res.json(draft.getState());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/reset-draft", (req, res) => {
  draft.resetDraft();
  res.json(draft.getState());
});

app.post("/api/full-reset", (req, res) => {
  draft.fullReset();
  res.json(draft.getState());
});

app.get("/", (req, res) => {
  res.send("Draft API Running ✅");
});

app.listen(port, () => {
  console.log(`serving on ${port}`);
});

