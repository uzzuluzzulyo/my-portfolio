import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?*+[]{}#$%';
const TOTAL_FRAMES = 18;
const FRAME_MS = 35;

function scrambleFrame(text, revealCount) {
  return text
    .split('')
    .map((ch, i) => {
      if (ch === ' ' || i < revealCount) return ch;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join('');
}

/**
 * ScrambleText 컴포넌트
 *
 * haoqi.design류 텍스트 스크램블 리빌 효과. 화면에 들어오면 글자가 무작위
 * 글리프로 흔들리다가 왼쪽부터 순서대로 실제 텍스트로 고정된다.
 *
 * Props:
 * @param {string} text - 표시할 실제 텍스트 [Required]
 * @param {string} component - 렌더링할 HTML 태그/컴포넌트 [Optional, 기본값: 'span']
 * @param {object} sx - MUI sx 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <ScrambleText text="Projects" variant="h4" />
 */
function ScrambleText({ text, component = 'span', sx, ...rest }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const revealCount = Math.ceil((frame / TOTAL_FRAMES) * text.length);
      setDisplay(scrambleFrame(text, revealCount));
      if (frame >= TOTAL_FRAMES) {
        setDisplay(text);
        clearInterval(id);
      }
    }, FRAME_MS);
    return () => clearInterval(id);
  }, [started, text]);

  return (
    <Typography ref={ref} component={component} aria-label={text} sx={sx} {...rest}>
      <span aria-hidden="true">{display}</span>
    </Typography>
  );
}

export default ScrambleText;
