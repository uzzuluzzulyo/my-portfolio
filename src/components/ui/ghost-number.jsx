import Typography from '@mui/material/Typography';

/**
 * GhostNumber 컴포넌트
 *
 * 섹션 번호를 큰 아웃라인(고스트) 스타일 숫자로 보여준다. 작은 인라인 숫자 대신
 * 에디토리얼 포트폴리오류의 큰 여백 넘버링 장식을 흉내낸다.
 *
 * Props:
 * @param {node} children - 표시할 숫자/텍스트 [Required]
 * @param {object} sx - 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <GhostNumber>01</GhostNumber>
 */
function GhostNumber({ children, sx }) {
  return (
    <Typography
      aria-hidden
      sx={{
        fontFamily: (theme) => theme.typography.fontFamilyMono,
        fontWeight: 700,
        fontSize: { xs: '3.2rem', md: '5.2rem' },
        lineHeight: 1,
        color: 'transparent',
        WebkitTextStroke: (theme) => `1.5px ${theme.palette.divider}`,
        userSelect: 'none',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export default GhostNumber;
