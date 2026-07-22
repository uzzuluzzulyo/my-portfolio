import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import LoadingBar from '../ui/loading-bar.jsx';

const DURATION_MS = 500;

/**
 * RouteLoader 컴포넌트
 *
 * 페이지(Home/About Me/Projects) 전환 시 SiteLoader와 동일한 "DESIGN
 * PROCESSING" 로딩 연출을 짧게 보여준다. 최초 진입 시에는 SiteLoader가
 * 이미 처리하므로 첫 렌더는 건너뛴다.
 *
 * Example usage:
 * <RouteLoader />
 */
function RouteLoader() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return undefined;
    }

    setLoading(true);
    setProgress(0);
    let frameId;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);
      if (pct < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 120);
      }
    }
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [location.pathname]);

  return (
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
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
      }}
    >
      <LoadingBar progress={progress} />
    </Box>
  );
}

export default RouteLoader;
