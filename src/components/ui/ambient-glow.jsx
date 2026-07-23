import Box from '@mui/material/Box';

/**
 * AmbientGlow 컴포넌트
 *
 * 레퍼런스 포트폴리오 커버(KOJIHEE류)처럼 별 플레어 주변에 은은하게 번지는
 * 배경 글로우. 뚜렷한 광선 대신 부드러운 방사형 그라디언트로 분위기를 만든다.
 *
 * Props:
 * @param {object} sx - 배치용 스타일(top/left/right 등) [Required]
 *
 * Example usage:
 * <AmbientGlow sx={{ top: '-10%', right: '-15%' }} />
 */
function AmbientGlow({ sx }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        width: { xs: 700, md: 1100 },
        height: { xs: 560, md: 880 },
        borderRadius: '50%',
        background: (theme) =>
          `radial-gradient(ellipse at center, ${theme.palette.primary.main}3D 0%, ${theme.palette.primary.dark}22 32%, ${theme.palette.accent.cyan}14 52%, transparent 72%)`,
        filter: 'blur(30px)',
        ...sx,
      }}
    />
  );
}

export default AmbientGlow;
