import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: 'background.default',
        py: { xs: 10, md: 16 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ width: 40, height: 3, bgcolor: 'accent.main', mb: { xs: 3, md: 4 }, borderRadius: '2px' }} />
        <Typography
          variant="h3"
          sx={{
            color: 'text.primary',
            fontWeight: 800,
            mb: 2.5,
            letterSpacing: '-0.03em',
            fontSize: { xs: '2.4rem', md: '4rem' },
            lineHeight: 1.08,
          }}
        >
          My Portfolio
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
