import Box from '@mui/material/Box';

const SPECKS = [
  { top: '12%', left: '58%', size: 2, delay: '0s', duration: '3.2s' },
  { top: '20%', left: '72%', size: 3, delay: '0.6s', duration: '4s' },
  { top: '8%', left: '85%', size: 2, delay: '1.2s', duration: '3.6s' },
  { top: '34%', left: '90%', size: 2, delay: '0.3s', duration: '2.8s' },
  { top: '42%', left: '65%', size: 3, delay: '1.6s', duration: '4.4s' },
  { top: '28%', left: '48%', size: 2, delay: '0.9s', duration: '3.4s' },
];

/**
 * StarSpecks 컴포넌트
 *
 * 레퍼런스 포트폴리오 커버(KOJIHEE류)에 흩뿌려진 작은 별 반짝임을 흉내낸
 * 장식용 점들. 각기 다른 타이밍으로 은은하게 깜빡인다.
 *
 * Example usage:
 * <StarSpecks />
 */
function StarSpecks() {
  return (
    <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {SPECKS.map((speck, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: speck.top,
            left: speck.left,
            width: speck.size,
            height: speck.size,
            borderRadius: '50%',
            bgcolor: '#FFFFFF',
            boxShadow: '0 0 6px 1px rgba(255,255,255,0.8)',
            animation: `speck-twinkle ${speck.duration} ease-in-out ${speck.delay} infinite`,
            '@keyframes speck-twinkle': {
              '0%, 100%': { opacity: 0.15, transform: 'scale(0.8)' },
              '50%': { opacity: 1, transform: 'scale(1.3)' },
            },
          }}
        />
      ))}
    </Box>
  );
}

export default StarSpecks;
