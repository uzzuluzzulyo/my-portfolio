import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

function HeroSection() {
  return (
    <SectionContainer bgColor="#FF4FA3">
      <Typography
        variant="h3"
        sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}
      >
        Hero
      </Typography>
      <Typography sx={{ color: '#FFFFFF', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
        여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
      </Typography>
    </SectionContainer>
  );
}

export default HeroSection;
