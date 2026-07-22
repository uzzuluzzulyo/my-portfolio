import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

/**
 * LiveClock 컴포넌트
 *
 * 1초마다 갱신되는 현재 시각을 보여준다. haoqi.design류 엔지니어링 포트폴리오에서
 * 흔한 실시간 메타데이터 표시 장치.
 *
 * Example usage:
 * <LiveClock />
 */
function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted = time.toLocaleTimeString('en-GB', { hour12: false });

  return (
    <Typography
      sx={{
        color: 'text.secondary',
        fontFamily: (theme) => theme.typography.fontFamilyMono,
        fontSize: '0.75rem',
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      {formatted} GMT+9
    </Typography>
  );
}

export default LiveClock;
