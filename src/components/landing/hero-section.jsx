import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RevealOnScroll from '../ui/reveal-on-scroll.jsx';
import ScrambleText from '../ui/scramble-text.jsx';
import LiveClock from '../ui/live-clock.jsx';
import GridFrame from '../ui/grid-frame.jsx';

function HeroSection() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
      <GridFrame showTop showBottom>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            py: { xs: 10, md: 16 },
            px: { xs: 2.5, md: 4 },
            overflow: 'hidden',
            minHeight: { xs: 460, md: 560 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: { xs: '-16%', md: '-14%' },
              right: { xs: '-14%', md: '-10%' },
              width: { xs: 340, md: 560 },
              height: { xs: 340, md: 560 },
              borderRadius: '50%',
              background: (theme) => `radial-gradient(circle, ${theme.palette.primary.main}45 0%, transparent 68%)`,
              filter: 'blur(6px)',
              animation: 'float-blob-a 9s ease-in-out infinite',
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: '-8%',
              right: '-6%',
              width: { xs: 200, md: 340 },
              height: { xs: 200, md: 340 },
              borderRadius: '50%',
              overflow: 'hidden',
              background: (theme) => `
                linear-gradient(125deg, transparent 22%, rgba(255,255,255,0.55) 38%, rgba(255,255,255,0.05) 47%, transparent 60%),
                radial-gradient(circle at 24% 20%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 7%, transparent 20%),
                radial-gradient(circle at 82% 16%, rgba(255,255,255,0.25) 0%, transparent 26%),
                radial-gradient(circle at 78% 82%, rgba(0,0,0,0.55) 0%, transparent 58%),
                radial-gradient(circle at 45% 45%, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 85%)
              `,
              boxShadow: (theme) =>
                `inset -10px -14px 26px rgba(0,0,0,0.45), inset 8px 10px 18px rgba(255,255,255,0.12), 0 30px 60px ${theme.palette.primary.main}40`,
              animation: 'float-blob-a 9s ease-in-out infinite',
              '@keyframes float-blob-a': {
                '0%, 100%': { transform: 'translate(0, 0)' },
                '50%': { transform: 'translate(-14px, 18px)' },
              },
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              bottom: '-20%',
              right: '2%',
              width: { xs: 200, md: 320 },
              height: { xs: 200, md: 320 },
              borderRadius: '50%',
              background: 'radial-gradient(circle, #E8B34E4D 0%, transparent 68%)',
              filter: 'blur(6px)',
              animation: 'float-blob-b 11s ease-in-out infinite',
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              bottom: '-12%',
              right: '10%',
              width: { xs: 120, md: 190 },
              height: { xs: 120, md: 190 },
              borderRadius: '50%',
              overflow: 'hidden',
              background: `
                linear-gradient(125deg, transparent 22%, rgba(255,255,255,0.5) 38%, rgba(255,255,255,0.05) 47%, transparent 60%),
                radial-gradient(circle at 26% 22%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 7%, transparent 20%),
                radial-gradient(circle at 82% 18%, rgba(255,255,255,0.22) 0%, transparent 26%),
                radial-gradient(circle at 78% 82%, rgba(0,0,0,0.5) 0%, transparent 55%),
                radial-gradient(circle at 45% 45%, #F8DFA6 0%, #B8842E 85%)
              `,
              boxShadow: '0 24px 46px rgba(232,179,78,0.28), inset -8px -10px 20px rgba(0,0,0,0.4), inset 6px 8px 14px rgba(255,255,255,0.12)',
              animation: 'float-blob-b 11s ease-in-out infinite',
              '@keyframes float-blob-b': {
                '0%, 100%': { transform: 'translate(0, 0)' },
                '50%': { transform: 'translate(12px, -14px)' },
              },
            }}
          />

          <Container maxWidth="md" sx={{ position: 'relative' }}>
            <RevealOnScroll>
              <Box sx={{ width: 40, height: 3, bgcolor: 'text.primary', mb: { xs: 3, md: 4 }, borderRadius: '2px' }} />
              <ScrambleText
                text="My Portfolio"
                component="h1"
                variant="h3"
                sx={{
                  color: 'text.primary',
                  fontWeight: 900,
                  mb: 2.5,
                  letterSpacing: '-0.03em',
                  fontSize: { xs: '2.6rem', md: '4.5rem' },
                  lineHeight: 1.02,
                  textTransform: 'uppercase',
                }}
              />
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

          <Container maxWidth="md" sx={{ position: 'relative', mt: { xs: 8, md: 10 } }}>
            <LiveClock />
          </Container>
        </Box>
      </GridFrame>
    </Box>
  );
}

export default HeroSection;
