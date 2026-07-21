import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ProjectCard from '../components/ui/project-card.jsx';
import { useProjects } from '../hooks/use-projects.js';

function Projects() {
  const { projects, loading, error } = useProjects();

  return (
    <Box sx={{ width: '100%', minHeight: '80vh', py: { xs: 6, md: 10 }, px: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', fontWeight: 700, mb: 1, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.5rem' } }}
        >
          Projects
        </Typography>
        <Typography sx={{ color: 'text.secondary', textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          지금까지 만든 프로젝트들이에요
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: 'accent.main' }} />
          </Box>
        )}

        {!loading && error && (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>{error}</Typography>
        )}

        {!loading && !error && projects.length === 0 && (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            아직 등록된 프로젝트가 없어요.
          </Typography>
        )}

        {!loading && !error && projects.length > 0 && (
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
