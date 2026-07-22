import Typography from '@mui/material/Typography';

/**
 * GlossyWord 컴포넌트
 *
 * haoqi.design 히어로의 3D 글로시 커서브 텍스트 장식을 CSS로 근사한 워드마크.
 * 실제 3D 렌더링 대신 그라디언트 텍스트 채우기 + drop-shadow로 튜브형 하이라이트를
 * 흉내내는 뼈대 버전이다.
 *
 * Props:
 * @param {string} text - 표시할 장식용 단어 [Required]
 * @param {object} sx - 위치/크기 등 배치 오버라이드 [Optional]
 *
 * Example usage:
 * <GlossyWord text="Hello" sx={{ top: '40%', left: '4%' }} />
 */
function GlossyWord({ text, sx }) {
  return (
    <Typography
      aria-hidden
      sx={{
        position: 'absolute',
        fontFamily: '"Pacifico", cursive',
        fontWeight: 400,
        fontSize: { xs: '4.5rem', md: '8.5rem' },
        lineHeight: 1,
        background: 'linear-gradient(155deg, #eef4ff 0%, #8fb4f6 22%, #5b8def 45%, #1c3a7a 62%, #8fb4f6 80%, #eef4ff 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 14px 26px rgba(91, 141, 239, 0.3))',
        opacity: 0.8,
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
}

export default GlossyWord;
