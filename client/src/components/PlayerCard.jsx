import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import schoolConfig from "../data/schoolsConfig";


function PlayerCard({ player, onPick, disabled }) {
  const school = schoolConfig.find((s) => s.code === player.school);
  return (
    <Card
      elevation={2}
      sx={{
        width: '100%',
        maxWidth: 270,
        minWidth: 0,
        m: 'auto',
        p: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        {/* 1️⃣ School Logo */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 0.5 }}>
          {school && (
            <img
              src={school.logo}
              alt={school.name}
              style={{ height: 50, objectFit: 'contain', maxWidth: 106, width: 'auto' }}
            />
          )}
        </Box>
        {/* 2️⃣ Ranking and Name Row */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 0.5 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'red', mr: 1, fontSize: 19 }}>
            #{player.rank}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#222', fontSize:17 , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {player.name} , {player.position}
          </Typography>
        </Box>
        {/* 3️⃣ Info Row: Height, Weight, Grade, School */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 1 }}>
          <Typography variant="body2" sx={{ color: '#444', fontWeight: 500 }}>{player.height}</Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>|</Typography>
          <Typography variant="body2" sx={{ color: '#444', fontWeight: 500 }}>{player.weight}</Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>|</Typography>
          <Typography variant="body2" sx={{ color: '#444', fontWeight: 500 }}>{player.grade}</Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>|</Typography>
          <Typography variant="body2" sx={{ color: '#444', fontWeight: 500 }}>{school ? school.name : player.school}</Typography>
        </Box>
        {/* 4️⃣ Pick Button */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="medium"
            disabled={disabled}
            onClick={() => onPick(player.id)}
            sx={{
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 2,
              px: 5,
              py: 1.2,
              background: '#0a7dfa',
              minWidth: 120,
              '&:hover': { background: '#0055aa' },
            }}
          >
            Pick
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
