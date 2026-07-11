import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

function ContactSection() {
  return (
    <SectionContainer bgColor="#1B2A4A">
      <Typography
        variant="h4"
        sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Contact
      </Typography>
      <Typography sx={{ color: '#FFFFFF', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
        여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
      </Typography>
    </SectionContainer>
  );
}

export default ContactSection;
