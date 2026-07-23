import Box from '@mui/material/Box';

/**
 * StarFlare 컴포넌트
 *
 * 레퍼런스 포트폴리오 커버들에 공통으로 등장하는 글로우 플레어(별/코멧 빛)를
 * CSS로 근사한다. 중심 코어 + 십자/대각선 스파이크 + 부드러운 헤일로로 구성된다.
 *
 * Props:
 * @param {object} sx - 배치용 스타일(top/left/right 등) [Required]
 *
 * Example usage:
 * <StarFlare sx={{ top: '20%', right: '18%' }} />
 */
function StarFlare({ sx }) {
  return (
    <Box aria-hidden sx={{ position: 'absolute', width: 0, height: 0, ...sx }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 260,
          height: 260,
          ml: '-130px',
          mt: '-130px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.32) 0%, rgba(108,142,239,0.18) 38%, transparent 70%)',
          filter: 'blur(3px)',
          animation: 'flare-pulse 4.5s ease-in-out infinite',
          '@keyframes flare-pulse': {
            '0%, 100%': { opacity: 0.75, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.12)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 8,
          height: 8,
          ml: '-4px',
          mt: '-4px',
          borderRadius: '50%',
          bgcolor: '#FFFFFF',
          boxShadow: '0 0 16px 4px rgba(255,255,255,0.85), 0 0 60px 14px rgba(108,142,239,0.55)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1px',
          height: 240,
          ml: '-0.5px',
          mt: '-120px',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.55) 47%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.55) 53%, transparent)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 240,
          height: '1px',
          ml: '-120px',
          mt: '-0.5px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55) 47%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.55) 53%, transparent)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1px',
          height: 130,
          ml: '-0.5px',
          mt: '-65px',
          background: 'linear-gradient(180deg, transparent, rgba(108,142,239,0.55) 50%, transparent)',
          transform: 'rotate(45deg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1px',
          height: 130,
          ml: '-0.5px',
          mt: '-65px',
          background: 'linear-gradient(180deg, transparent, rgba(56,189,248,0.55) 50%, transparent)',
          transform: 'rotate(-45deg)',
        }}
      />
    </Box>
  );
}

export default StarFlare;
