import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RevealOnScroll from './reveal-on-scroll.jsx';
import GridFrame from './grid-frame.jsx';

/**
 * SectionContainer 컴포넌트
 *
 * haoqi.design 스타일의 청사진 패널 섹션 래퍼. GridFrame으로 상/하단 구분선과
 * 십자 마크를 그리고, 그 안에 좌측 정렬 콘텐츠를 배치한다.
 *
 * Props:
 * @param {node} children - 섹션 내부 콘텐츠 [Required]
 * @param {string} bgColor - 섹션 배경색 [Optional, 기본값: 'background.default']
 * @param {string} maxWidth - Container 최대 너비 [Optional, 기본값: 'md']
 * @param {boolean} noDivider - 상단 구분선/십자 마크 숨김 여부 [Optional, 기본값: false]
 * @param {boolean} showBottom - 하단 구분선/십자 마크 표시 여부 [Optional, 기본값: false]
 * @param {string} lineColor - 구분선/십자 마크 색상 [Optional, 기본값: 'divider']
 * @param {node} decoration - 섹션 전체에 걸쳐 배치되는 장식 오버레이(예: StarSpecks) [Optional]
 *
 * Example usage:
 * <SectionContainer><Typography>내용</Typography></SectionContainer>
 */
function SectionContainer({
  children,
  bgColor = 'background.default',
  maxWidth = 'md',
  noDivider = false,
  showBottom = false,
  lineColor = 'divider',
  decoration = null,
}) {
  return (
    <Box sx={{ width: '100%', bgcolor: bgColor }}>
      <GridFrame showTop={!noDivider} showBottom={showBottom} lineColor={lineColor}>
        {decoration}
        <Box sx={{ py: { xs: 8, md: 13 }, px: { xs: 2.5, md: 4 } }}>
          <Container maxWidth={maxWidth} sx={{ textAlign: 'left' }}>
            <RevealOnScroll>{children}</RevealOnScroll>
          </Container>
        </Box>
      </GridFrame>
    </Box>
  );
}

export default SectionContainer;
