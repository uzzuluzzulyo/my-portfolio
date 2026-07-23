import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function AboutMe() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80vh',
        py: { xs: 10, md: 14 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ width: 40, height: 3, bgcolor: 'text.primary', mb: { xs: 3, md: 4 }, borderRadius: '2px' }} />
        <Typography
          variant="h4"
          sx={{
            color: 'text.primary',
            fontFamily: (theme) => theme.typography.fontFamilyDisplay,
            fontWeight: 700,
            letterSpacing: '0.02em',
            mb: 2,
            fontSize: { xs: '1.9rem', md: '2.6rem' },
          }}
        >
          About Me
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}>
          About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutMe;
