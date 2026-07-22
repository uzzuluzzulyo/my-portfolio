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
        <Typography
          sx={{ color: 'text.disabled', fontFamily: (theme) => theme.typography.fontFamilyMono, fontSize: '0.75rem' }}
        >
          Email
        </Typography>
        <Typography
          component="a"
          href="mailto:uzzuluzzulyo0@gmail.com"
          sx={{
            color: 'ink.main',
            fontWeight: 600,
            textDecoration: 'underline',
            textDecorationColor: 'divider',
            textUnderlineOffset: '3px',
            '&:hover': { color: 'primary.main', textDecorationColor: 'primary.main' },
          }}
        >
          uzzuluzzulyo0@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactInfoCard;
