import Box from '@mui/material/Box';

const BEAMS = [
  { left: '2%', color: '#6C8EEF', width: 70 },
  { left: '20%', color: '#38BDF8', width: 50 },
  { left: '40%', color: '#9AB2F5', width: 90 },
  { left: '62%', color: '#7DD3FC', width: 60 },
  { left: '84%', color: '#6C8EEF', width: 80 },
];

/**
 * LightRays 컴포넌트
 *
 * haoqi.design 히어로의 대각선 유리 굴절 광선을 어두운 배경용으로 근사한
 * 장식용 빛줄기. mix-blend-mode: screen으로 어두운 배경 위에서 은은하게
 * 빛나 보이도록 한다.
 *
 * Example usage:
 * <LightRays />
 */
function LightRays() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    >
      {BEAMS.map((beam) => (
        <Box
          key={beam.left}
          sx={{
            position: 'absolute',
            top: '-40%',
            left: beam.left,
            width: { xs: beam.width * 0.6, md: beam.width },
            height: '220%',
            background: `linear-gradient(180deg, transparent 10%, ${beam.color}4D 45%, ${beam.color}26 58%, transparent 85%)`,
            transform: 'rotate(22deg)',
            filter: 'blur(16px)',
          }}
        />
      ))}
    </Box>
  );
}

export default LightRays;
