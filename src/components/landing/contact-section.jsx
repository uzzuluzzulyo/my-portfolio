import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import ScrambleText from '../ui/scramble-text.jsx';
import GhostNumber from '../ui/ghost-number.jsx';
import StarSpecks from '../ui/star-specks.jsx';
import ContactInfoCard from './contact-info-card.jsx';
import Guestbook from './guestbook.jsx';

function ContactSection() {
  return (
    <SectionContainer bgColor="background.default" showBottom decoration={<StarSpecks />}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2.5 }, mb: 2.5 }}>
        <GhostNumber>04</GhostNumber>
        <ScrambleText
          text="Contact"
          component="h2"
          variant="h4"
          sx={{
            color: 'text.primary',
            fontFamily: (theme) => theme.typography.fontFamilyDisplay,
            fontWeight: 700,
            letterSpacing: '0.02em',
            fontSize: { xs: '1.6rem', md: '2.1rem' },
          }}
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
