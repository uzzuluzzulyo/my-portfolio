import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

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
        bgcolor: 'rgba(7, 8, 12, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ maxWidth: 960, width: '100%', mx: 'auto', justifyContent: 'flex-end', gap: { xs: 2, md: 4 }, py: 1.5 }}>
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
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: { xs: '0.78rem', md: '0.85rem' },
                letterSpacing: '0.03em',
                transition: 'color 0.15s ease',
                '&:hover': { bgcolor: 'transparent', color: 'text.primary' },
                '&.active': { color: 'text.primary' },
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
