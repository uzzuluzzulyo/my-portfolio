import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

function SkillTreeSection() {
  return (
    <SectionContainer>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 2 }}>
        <Typography sx={{ color: 'text.disabled', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          02
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Skill Tree
        </Typography>
      </Box>
      <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7, maxWidth: 640 }}>
        여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
      </Typography>
    </SectionContainer>
  );
}

export default SkillTreeSection;
