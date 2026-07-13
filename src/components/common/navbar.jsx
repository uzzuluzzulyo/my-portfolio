import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function Navbar() {
  return (
    <AppBar position="sticky" color="secondary" elevation={0}>
      <Toolbar sx={{ justifyContent: 'center', gap: { xs: 1, md: 3 }, py: 1 }}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={NavLink}
            to={item.path}
            end={item.path === '/'}
            sx={{
              position: 'relative',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: { xs: '0.85rem', md: '1rem' },
              '&.active': {
                color: (theme) => theme.palette.accent.main,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: (theme) => `-${theme.spacing(1)}`,
                  height: '3px',
                  backgroundColor: (theme) => theme.palette.accent.main,
                },
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
