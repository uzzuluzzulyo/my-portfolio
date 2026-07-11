import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

function ProjectsSection() {
  return (
    <SectionContainer bgColor="#FFFFFF">
      <Card variant="outlined" sx={{ borderColor: '#3ED6C5', borderWidth: 2, p: { xs: 2, md: 4 } }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ color: '#1B2A4A', fontWeight: 700, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            Projects
          </Typography>
          <Typography sx={{ color: '#1A1A1A', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
            여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}

export default ProjectsSection;
