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
    <Stack className="draft-header-wrapper" sx={{ width: '94%',margin:'9px 21px', gap: 2 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={3} flexWrap="wrap">
          <Typography
            variant="h5"
            component="h2"
            className="draft-title"
            sx={{ mb: 0 }}
          >
            Round {round} | Pick {pick}
          </Typography>
          <Typography variant="body1" className="current-team" sx={{ mb: 0 }}>
            Current Team: <span>{team}</span>
          </Typography>
          {needs && needs.length > 0 && (
            <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
              <Typography variant="body1" className="needs-label">
                Team Needs:
              </Typography>
              <Typography variant="body1" className="needs-list">
                {needs.join(", ")}
              </Typography>
            </Stack>
          )}
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={onReset}
            startIcon={<RefreshIcon />}
            className="reset-btn"
          >
            Reset Draft
          </Button>
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
    </Stack>
  );
}

export default DraftHeader;
