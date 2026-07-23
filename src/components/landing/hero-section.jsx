import { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RevealOnScroll from '../ui/reveal-on-scroll.jsx';
import ScrambleText from '../ui/scramble-text.jsx';
import LiveClock from '../ui/live-clock.jsx';
import GridFrame from '../ui/grid-frame.jsx';
import AmbientGlow from '../ui/ambient-glow.jsx';
import StarFlare from '../ui/star-flare.jsx';
import OrbitArc from '../ui/orbit-arc.jsx';
import StarSpecks from '../ui/star-specks.jsx';

function HeroSection() {
  const flareGroupRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frameId = null;

    function updateParallax() {
      frameId = null;
      const y = window.scrollY;
      if (flareGroupRef.current) flareGroupRef.current.style.transform = `translateY(${y * 0.22}px)`;
    }

    function handleScroll() {
      if (frameId === null) frameId = requestAnimationFrame(updateParallax);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

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
          <Box ref={flareGroupRef} aria-hidden sx={{ position: 'absolute', inset: 0 }}>
            <AmbientGlow sx={{ top: { xs: '-16%', md: '-22%' }, right: { xs: '-26%', md: '-20%' } }} />
            <OrbitArc size={780} sx={{ top: '-42%', left: '18%' }} />
            <OrbitArc size={480} sx={{ top: '-8%', right: '-16%' }} />
            <StarFlare sx={{ top: { xs: '14%', md: '22%' }, right: { xs: '14%', md: '20%' } }} />
            <StarSpecks />
          </Box>

          <Container maxWidth="md" sx={{ position: 'relative' }}>
            <RevealOnScroll>
              <Box sx={{ width: 40, height: 3, bgcolor: 'text.primary', mb: { xs: 3, md: 4 }, borderRadius: '2px' }} />
              <ScrambleText
                text="My Portfolio"
                component="h1"
                variant="h3"
                sx={{
                  color: 'text.primary',
                  fontFamily: (theme) => theme.typography.fontFamilyDisplay,
                  fontWeight: 700,
                  mb: 2.5,
                  letterSpacing: { xs: '0.03em', md: '0.06em' },
                  fontSize: { xs: '2.4rem', md: '4.2rem' },
                  lineHeight: 1.15,
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
