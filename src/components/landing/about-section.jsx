import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

function AboutSection() {
  return (
    <SectionContainer bgColor="background.paper">
      <Card variant="outlined" sx={{ borderColor: 'divider', p: { xs: 2, md: 4 } }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ color: 'text.primary', fontWeight: 700, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            About Me
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
            여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}

export default AboutSection;
