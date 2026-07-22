import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import ScrambleText from '../ui/scramble-text.jsx';
import ContactInfoCard from './contact-info-card.jsx';
import Guestbook from './guestbook.jsx';

function ContactSection() {
  return (
    <SectionContainer bgColor="sky.main" showBottom>
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
          04
        </Typography>
        <ScrambleText
          text="Contact"
          component="h2"
          variant="h4"
          sx={{ color: 'ink.main', fontSize: { xs: '1.5rem', md: '2rem' } }}
        />
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
