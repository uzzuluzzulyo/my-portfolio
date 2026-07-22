import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

function ContactInfoCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 5,
        pb: 4,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <EmailIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
      <Box>
        <Typography sx={{ color: 'text.disabled', fontSize: '0.75rem' }}>Email</Typography>
        <Typography
          component="a"
          href="mailto:uzzuluzzulyo0@gmail.com"
          sx={{ color: 'text.primary', fontWeight: 600, textDecoration: 'none', '&:hover': { color: 'accent.main' } }}
        >
          uzzuluzzulyo0@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactInfoCard;
