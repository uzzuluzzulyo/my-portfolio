import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

function ContactInfoCard() {
  return (
    <Card sx={{ bgcolor: 'background.default', p: { xs: 2, md: 3 }, mb: 4, display: 'inline-block' }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: 'accent.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <EmailIcon sx={{ color: 'accent.contrastText' }} />
          </Box>
          <Box sx={{ textAlign: 'left' }}>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>Email</Typography>
            <Typography
              component="a"
              href="mailto:uzzuluzzulyo0@gmail.com"
              sx={{ color: 'text.primary', fontWeight: 700, textDecoration: 'none' }}
            >
              uzzuluzzulyo0@gmail.com
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ContactInfoCard;
