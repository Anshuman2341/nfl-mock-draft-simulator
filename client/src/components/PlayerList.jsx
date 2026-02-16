import React from "react";
import PlayerCard from "./PlayerCard";
import Box from "@mui/material/Box";


function PlayerList({ players, onPick, disabled }) {
  return (
    <Box
      sx={{
        width: '95%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        columnGap: 1.2,
        rowGap: 4,
        p: 2,
      }}
    >
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          onPick={onPick}
          disabled={disabled}
        />
      ))}
    </Box>
  );
}

export default PlayerList;
