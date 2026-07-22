import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LoadingBar from '../ui/loading-bar.jsx';

const DURATION_MS = 900;

/**
 * SiteLoader 컴포넌트
 *
 * haoqi.design류 진입 로딩 효과. 사이트 진입 시 짧은 프로그레스 바 애니메이션을
 * 보여준 뒤 실제 콘텐츠를 드러낸다.
 *
 * Props:
 * @param {node} children - 로딩 후 보여줄 콘텐츠 [Required]
 *
 * Example usage:
 * <SiteLoader><App /></SiteLoader>
 */
function SiteLoader({ children }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let frameId;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);
      if (pct < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 200);
      }
    }
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <>
      <Box
        aria-hidden={!loading}
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          opacity: loading ? 1 : 0,
          visibility: loading ? 'visible' : 'hidden',
          pointerEvents: loading ? 'auto' : 'none',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
        }}
      >
        <LoadingBar progress={progress} />
      </Box>
      {children}
    </>
  );
}

export default SiteLoader;
