import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * LoadingBar 컴포넌트
 *
 * "DESIGN PROCESSING n%" 멘트와 진행률 바를 함께 보여준다. SiteLoader와
 * RouteLoader가 공유하는 순수 표시 컴포넌트.
 *
 * Props:
 * @param {number} progress - 진행률(0~100) [Required]
 *
 * Example usage:
 * <LoadingBar progress={progress} />
 */
function LoadingBar({ progress }) {
  return (
    <>
      <Typography
        sx={{
          fontFamily: (theme) => theme.typography.fontFamilyMono,
          fontSize: '0.72rem',
          letterSpacing: '0.16em',
          color: 'text.secondary',
        }}
      >
        DESIGN PROCESSING {Math.round(progress)}%
      </Typography>
      <Box sx={{ width: 180, height: 2, bgcolor: 'divider', borderRadius: 1, overflow: 'hidden' }}>
        <Box sx={{ height: '100%', width: `${progress}%`, bgcolor: 'text.primary' }} />
      </Box>
    </>
  );
}

export default LoadingBar;
