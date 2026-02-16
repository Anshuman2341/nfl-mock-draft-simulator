import Teams from "../Teams";
import Top10 from "../Top10";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

export default function SelectionSection({ onSelectTeam, players }) {
  return (
    <Box component="section" sx={{ minHeight: '100vh', px: { xs: 1, sm: 2, md: 4 }, py: 4 }}>
      <Grid container alignItems="stretch" justifyContent="center" spacing={4}>
        <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="stretch">
          <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Teams onSelectTeam={onSelectTeam} />
          </Box>
        </Grid>
        <Grid item xs={12} md={2} display={{ xs: 'none', md: 'flex' }} justifyContent="center" alignItems="stretch">
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0', minHeight: '100%' }} />
        </Grid>
        <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="stretch">
          <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Top10 players={players} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
