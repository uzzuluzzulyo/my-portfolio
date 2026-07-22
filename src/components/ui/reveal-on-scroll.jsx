import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * RevealOnScroll 컴포넌트
 *
 * 화면에 들어오면 살짝 위로 슬라이드하며 페이드인되는 스크롤 리빌 래퍼.
 *
 * Props:
 * @param {node} children - 리빌 대상 콘텐츠 [Required]
 *
 * Example usage:
 * <RevealOnScroll><Typography>내용</Typography></RevealOnScroll>
 */
function RevealOnScroll({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </Box>
  );
}

export default RevealOnScroll;
