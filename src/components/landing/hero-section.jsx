import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RevealOnScroll from '../ui/reveal-on-scroll.jsx';

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: 'background.default',
        py: { xs: 10, md: 16 },
        px: { xs: 2.5, md: 4 },
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-8%',
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle at 35% 35%, ${theme.palette.primary.main}33, transparent 70%)`,
          filter: 'blur(10px)',
          animation: 'float-blob-a 9s ease-in-out infinite',
          '@keyframes float-blob-a': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-18px, 22px)' },
          },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: '8%',
          width: { xs: 140, md: 220 },
          height: { xs: 140, md: 220 },
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle at 40% 40%, ${theme.palette.secondary.main}2e, transparent 70%)`,
          filter: 'blur(6px)',
          animation: 'float-blob-b 11s ease-in-out infinite',
          '@keyframes float-blob-b': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(16px, -18px)' },
          },
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <RevealOnScroll>
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
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

export default HeroSection;
