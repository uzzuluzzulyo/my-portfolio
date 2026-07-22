import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import LiveClock from '../ui/live-clock.jsx';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(10, 10, 12, 0.82)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ maxWidth: 960, width: '100%', mx: 'auto', justifyContent: 'space-between', gap: { xs: 2, md: 4 }, py: 1.5 }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <LiveClock />
        </Box>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === '/'}
              disableRipple
              sx={{
                minWidth: 0,
                p: 0,
                position: 'relative',
                color: 'text.secondary',
                fontFamily: (theme) => theme.typography.fontFamilyMono,
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: { xs: '0.72rem', md: '0.78rem' },
                letterSpacing: '0.06em',
                transition: 'color 0.15s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: -4,
                  height: '1px',
                  bgcolor: 'text.primary',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                },
                '&:hover': { bgcolor: 'transparent', color: 'text.primary' },
                '&:hover::after': { transform: 'scaleX(1)' },
                '&.active': { color: 'text.primary' },
                '&.active::after': { transform: 'scaleX(1)' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
