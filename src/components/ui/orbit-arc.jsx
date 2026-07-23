import Box from '@mui/material/Box';

/**
 * OrbitArc 컴포넌트
 *
 * 레퍼런스 포트폴리오 커버의 얇은 궤도/지평선 원을 흉내낸 장식용 원형 테두리.
 * 큰 원의 일부만 보이도록 배치해 대각선 아크처럼 보이게 한다.
 *
 * Props:
 * @param {number} size - 원 지름(px) [Optional, 기본값: 900]
 * @param {object} sx - 배치용 스타일(top/left/right 등) [Optional]
 *
 * Example usage:
 * <OrbitArc size={900} sx={{ top: '-30%', left: '20%' }} />
 */
function OrbitArc({ size = 900, sx }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        border: '1px solid rgba(237, 238, 242, 0.14)',
        ...sx,
      }}
    />
  );
}

export default OrbitArc;
