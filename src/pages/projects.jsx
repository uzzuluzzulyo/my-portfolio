import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{ color: '#1B2A4A', fontWeight: 700, mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
        >
          Projects
        </Typography>
        <Typography sx={{ color: '#767676', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
          Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default Projects;
