import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import ScrambleText from '../ui/scramble-text.jsx';
import GhostNumber from '../ui/ghost-number.jsx';

function SkillTreeSection() {
  return (
    <SectionContainer bgColor="background.default">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2.5 }, mb: 2.5 }}>
        <GhostNumber>02</GhostNumber>
        <ScrambleText
          text="Skill Tree"
          component="h2"
          variant="h4"
          sx={{ color: 'text.primary', fontSize: { xs: '1.5rem', md: '2rem' } }}
        />
      </Box>
      <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7, maxWidth: 640 }}>
        여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
      </Typography>
    </SectionContainer>
  );
}

export default SkillTreeSection;
