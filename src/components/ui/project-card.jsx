import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

/**
 * ProjectCard 컴포넌트
 *
 * projects 테이블 한 행을 카드 형태로 보여준다. 썸네일 이미지 대신 "PROJECT 01" 형태의
 * 넘버링 헤더를 사용한다.
 *
 * Props:
 * @param {object} project - 프로젝트 데이터 (title, description, tech_stack, detail_url) [Required]
 * @param {number} index - 카드 순번(0부터 시작), "PROJECT 01" 표기에 사용 [Optional, 기본값: 0]
 *
 * Example usage:
 * <ProjectCard project={project} index={0} />
 */
function ProjectCard({ project, index = 0 }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: 'divider',
        bgcolor: 'background.default',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
        '&:hover': {
          borderColor: 'accent.main',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 2.5, md: 3 },
          pt: { xs: 2.5, md: 3 },
          pb: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography
          sx={{
            color: 'accent.main',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
          }}
        >
          PROJECT
        </Typography>
        <Typography
          sx={{
            color: 'text.primary',
            fontWeight: 800,
            fontSize: '2.5rem',
            lineHeight: 1.1,
            fontFamily: '"Roboto Mono", "Roboto", monospace',
          }}
        >
          {number}
        </Typography>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 2.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ color: 'text.primary', fontWeight: 700, mb: 1, fontSize: { xs: '1.05rem', md: '1.15rem' } }}
        >
          {project.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6, mb: 2, flexGrow: 1 }}>
          {project.description}
        </Typography>

        {project.tech_stack?.length > 0 && (
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2.5 }}>
            {project.tech_stack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: 'transparent',
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontSize: '0.72rem',
                }}
              />
            ))}
          </Stack>
        )}

        {project.detail_url && (
          <Box>
            <Button
              component="a"
              href={project.detail_url}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{
                color: 'accent.main',
                fontWeight: 700,
                px: 0,
                '&:hover': { bgcolor: 'transparent', opacity: 0.8 },
              }}
            >
              바로가기
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
