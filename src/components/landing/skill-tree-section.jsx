import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

function SkillTreeSection() {
  return (
    <SectionContainer bgColor="background.default">
      <Card sx={{ p: { xs: 2, md: 4 }, borderTop: '4px solid #3ED6C5' }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ color: 'text.primary', fontWeight: 700, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            Skill Tree
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
            여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}

export default SkillTreeSection;
