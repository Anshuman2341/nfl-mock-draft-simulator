import express from "express";
import cors from "cors";
import DraftEngine from "./draftEngine.js";

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Server running on 5000");
});
