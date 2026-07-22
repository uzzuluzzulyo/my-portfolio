import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import ContactInfoCard from './contact-info-card.jsx';
import Guestbook from './guestbook.jsx';

function ContactSection() {
  return (
    <SectionContainer>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 2 }}>
        <Typography sx={{ color: 'text.disabled', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          04
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Contact
        </Typography>
      </Box>
      <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7, mb: 5, maxWidth: 640 }}>
        편하게 이메일로 연락 주시거나, 방명록에 메시지를 남겨주세요.
      </Typography>
      <ContactInfoCard />
      <Guestbook />
    </SectionContainer>
  );
}

export default ContactSection;
