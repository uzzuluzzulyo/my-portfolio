import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import ScrambleText from '../ui/scramble-text.jsx';

function SkillTreeSection() {
  return (
    <SectionContainer bgColor="ink.main" lineColor="rgba(251, 250, 244, 0.18)">
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 2 }}>
        <Typography
          sx={{
            color: 'rgba(251, 250, 244, 0.45)',
            fontFamily: (theme) => theme.typography.fontFamilyMono,
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          02
        </Typography>
        <ScrambleText
          text="Skill Tree"
          component="h2"
          variant="h4"
          sx={{ color: '#FBFAF4', fontSize: { xs: '1.5rem', md: '2rem' } }}
        />
      </Box>
      <Typography sx={{ color: 'rgba(251, 250, 244, 0.65)', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7, maxWidth: 640 }}>
        여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
      </Typography>
    </SectionContainer>
  );
}

export default SkillTreeSection;
