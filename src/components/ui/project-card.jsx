import { useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const CAN_TILT = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

/**
 * ProjectCard 컴포넌트
 *
 * projects 테이블 한 행을 카드 형태로 보여준다. thumbnail_url(image.thum.io 실시간
 * 스크린샷)을 검은 프레임 안에 넣고, tech_stack 첫 항목을 라임 컬러 태그 배지로 보여준다.
 *
 * Props:
 * @param {object} project - 프로젝트 데이터 (title, description, tech_stack, detail_url, thumbnail_url) [Required]
 *
 * Example usage:
 * <ProjectCard project={project} />
 */
function ProjectCard({ project }) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    if (!CAN_TILT || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-3px)`;
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.transform = '';
  }

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variant="outlined"
      sx={{
        borderColor: 'divider',
        bgcolor: 'background.default',
        borderRadius: '4px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s ease, transform 0.15s ease-out, box-shadow 0.25s ease',
        willChange: 'transform',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 12px 28px rgba(0,0,0,0.4)',
        },
      }}
    >
      {project.thumbnail_url && (
        <Box
          component={project.detail_url ? 'a' : 'div'}
          href={project.detail_url || undefined}
          target={project.detail_url ? '_blank' : undefined}
          rel={project.detail_url ? 'noopener noreferrer' : undefined}
          className="project-thumb"
          sx={{
            position: 'relative',
            display: 'block',
            overflow: 'hidden',
            bgcolor: '#000000',
            border: '1px solid',
            borderColor: 'divider',
            p: 1,
          }}
        >
          {project.tech_stack?.[0] && (
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
                bgcolor: 'accent.cyan',
                color: 'accent.contrastText',
                fontFamily: (theme) => theme.typography.fontFamilyMono,
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                px: 0.9,
                py: 0.3,
                borderRadius: '2px',
              }}
            >
              {project.tech_stack[0]}
            </Box>
          )}
          <CardMedia
            component="img"
            src={project.thumbnail_url}
            alt={project.title}
            loading="lazy"
            sx={{
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              objectPosition: 'top',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              '.project-thumb:hover &': { transform: 'scale(1.06)' },
            }}
          />
          {project.detail_url && (
            <Box
              sx={{
                position: 'absolute',
                inset: 8,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                p: 2,
                background: 'linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.85) 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                '.project-thumb:hover &': { opacity: 1 },
              }}
            >
              <Typography
                sx={{
                  color: '#FBFAF4',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                Explore <ArrowOutwardRoundedIcon sx={{ fontSize: '0.9rem' }} />
              </Typography>
            </Box>
          )}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 2.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ color: 'text.primary', fontWeight: 800, mb: 1, fontSize: { xs: '1.05rem', md: '1.15rem' }, letterSpacing: '-0.01em' }}
        >
          {project.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6, mb: 2.5, flexGrow: 1 }}>
          {project.description}
        </Typography>

        {project.tech_stack?.length > 0 && (
          <Typography
            sx={{
              color: 'text.disabled',
              fontFamily: (theme) => theme.typography.fontFamilyMono,
              fontSize: '0.72rem',
              letterSpacing: '0.02em',
              mb: 2,
            }}
          >
            {project.tech_stack.join('  ·  ')}
          </Typography>
        )}

        {project.detail_url && (
          <Box>
            <Button
              component="a"
              href={project.detail_url}
              target="_blank"
              rel="noopener noreferrer"
              disableRipple
              endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: '0.95rem !important' }} />}
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                fontSize: '0.85rem',
                px: 0,
                '& .MuiButton-endIcon': { transition: 'transform 0.2s ease' },
                '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
                '&:hover .MuiButton-endIcon': { transform: 'translate(2px, -2px)' },
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
