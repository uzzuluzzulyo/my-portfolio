import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SectionContainer from '../ui/section-container.jsx';
import ProjectCard from '../ui/project-card.jsx';
import ScrambleText from '../ui/scramble-text.jsx';
import { useProjects } from '../../hooks/use-projects.js';

const PREVIEW_COUNT = 3;

function ProjectsSection() {
  const { projects, loading } = useProjects();
  const preview = projects.slice(0, PREVIEW_COUNT);

  return (
    <SectionContainer maxWidth="lg" bgColor="background.paper">
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 1 }}>
        <Typography
          sx={{
            color: 'text.disabled',
            fontFamily: (theme) => theme.typography.fontFamilyMono,
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          03
        </Typography>
        <ScrambleText
          text="Projects"
          component="h2"
          variant="h4"
          sx={{ color: 'text.primary', fontSize: { xs: '1.5rem', md: '2rem' } }}
        />
      </Box>
      <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, mb: { xs: 4, md: 5 } }}>
        대표 프로젝트를 소개해요
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress sx={{ color: 'accent.main' }} />
        </Box>
      )}

      {!loading && preview.length > 0 && (
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {preview.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      )}

      <Button
        component={RouterLink}
        to="/projects"
        disableRipple
        endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '1rem !important' }} />}
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          fontSize: '0.9rem',
          px: 0,
          '& .MuiButton-endIcon': { transition: 'transform 0.2s ease' },
          '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
          '&:hover .MuiButton-endIcon': { transform: 'translateX(3px)' },
        }}
      >
        더 보기
      </Button>
    </SectionContainer>
  );
}

export default ProjectsSection;
