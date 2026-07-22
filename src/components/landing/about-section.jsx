import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import ScrambleText from '../ui/scramble-text.jsx';

function AboutSection() {
  return (
    <SectionContainer bgColor="background.paper" noDivider>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 2 }}>
        <Typography
          sx={{
            color: 'text.disabled',
            fontFamily: (theme) => theme.typography.fontFamilyMono,
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          01
        </Typography>
        <ScrambleText
          text="About Me"
          component="h2"
          variant="h4"
          sx={{ color: 'text.primary', fontSize: { xs: '1.5rem', md: '2rem' } }}
        />
      </Box>
      <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7, maxWidth: 640 }}>
        여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
      </Typography>
    </SectionContainer>
  );
}

export default AboutSection;
