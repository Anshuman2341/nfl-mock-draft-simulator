import React from "react";
import {
  Button,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./DraftHeader.css";

const SELECT_TEAM_BG = "#0066cc";

function DraftHeader({
  round,
  pick,
  team,
  needs,
  onReset,
  onSelectTeam,
}) {
  return (
    <Stack spacing={3} className="draft-header-wrapper">

      {/* Top Section: Title + Buttons */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
      >
        <Typography
          variant="h5"
          component="h2"
          className="draft-title"
        >
          Round {round} | Pick {pick}
        </Typography>

        <Stack direction="row" spacing={2}>

          {/* Reset Button */}
          <Button
            variant="outlined"
            onClick={onReset}
            startIcon={<RefreshIcon />}
            className="reset-btn"
          >
            Reset Draft
          </Button>

          {/* Select Team Button */}
          <Button
            variant="contained"
            onClick={onSelectTeam}
            startIcon={<SportsFootballIcon />}
            className="select-btn"
          >
            Select Team
          </Button>

        </Stack>
      </Stack>

      <Divider className="draft-divider" />

      {/* Current Team */}
      <Typography variant="body1" className="current-team">
        Current Team: <span>{team}</span>
      </Typography>

      {/* Team Needs */}
      {needs && needs.length > 0 && (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Typography variant="body1" className="needs-label">
            Team Needs:
          </Typography>
          <Typography variant="body1" className="needs-list">
            {needs.join(", ")}
          </Typography>
        </Stack>
      )}

    </Stack>
  );
}

export default DraftHeader;
