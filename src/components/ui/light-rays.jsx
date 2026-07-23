import Box from '@mui/material/Box';

const BEAMS = [
  { left: '3%', color: '#6C8EEF', width: 46, rotate: 16, blur: 22, opacity: 0.55 },
  { left: '24%', color: '#38BDF8', width: 74, rotate: 27, blur: 12, opacity: 0.9 },
  { left: '43%', color: '#9AB2F5', width: 28, rotate: 12, blur: 26, opacity: 0.4 },
  { left: '58%', color: '#7DD3FC', width: 96, rotate: 31, blur: 15, opacity: 0.75 },
  { left: '75%', color: '#6C8EEF', width: 36, rotate: 21, blur: 18, opacity: 0.5 },
  { left: '91%', color: '#38BDF8', width: 60, rotate: 24, blur: 20, opacity: 0.65 },
];

/**
 * LightRays 컴포넌트
 *
 * haoqi.design 히어로의 대각선 유리 굴절 광선을 어두운 배경용으로 근사한
 * 장식용 빛줄기. 각 빔마다 굵기/각도/세기/블러를 다르게 줘서 기계적으로
 * 반복되는 느낌 대신 자연광처럼 보이도록 한다.
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
            opacity: beam.opacity,
            background: `linear-gradient(180deg, transparent 10%, ${beam.color}4D 45%, ${beam.color}26 58%, transparent 85%)`,
            transform: `rotate(${beam.rotate}deg)`,
            filter: `blur(${beam.blur}px)`,
          }}
        />
      ))}
    </Box>
  );
}

export default LightRays;
