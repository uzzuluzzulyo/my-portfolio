import Box from '@mui/material/Box';

const EDGE_INSET = { xs: '10px', md: '18px' };
const GUIDE_POSITION = '12%';

function Cross({ sx, lineColor }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        width: 9,
        height: 9,
        pointerEvents: 'none',
        zIndex: 1,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          bgcolor: lineColor,
        },
        '&::before': { top: '50%', left: 0, width: '100%', height: '1px', transform: 'translateY(-50%)' },
        '&::after': { left: '50%', top: 0, width: '1px', height: '100%', transform: 'translateX(-50%)' },
        ...sx,
      }}
    />
  );
}

/**
 * GridFrame 컴포넌트
 *
 * haoqi.design 스타일의 청사진(blueprint) 그리드 프레임. 섹션 상/하단 구분선,
 * 우측 여백에 위치한 세로 가이드라인(좌측 정렬 텍스트와 겹치지 않는 적당한 지점),
 * 교차점의 십자(+) 마크로 각 섹션을 하나의 패널처럼 보이게 한다.
 *
 * Props:
 * @param {node} children - 프레임 내부 콘텐츠 [Required]
 * @param {boolean} showTop - 상단 구분선 및 십자 마크 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showBottom - 하단 구분선 및 십자 마크 표시 여부 [Optional, 기본값: false]
 * @param {string} lineColor - 구분선/십자 마크 색상 [Optional, 기본값: 'divider']
 *
 * Example usage:
 * <GridFrame showBottom lineColor="rgba(251,250,244,0.18)"><SectionContent /></GridFrame>
 */
function GridFrame({ children, showTop = true, showBottom = false, lineColor = 'divider' }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderTop: showTop ? '1px solid' : 'none',
        borderBottom: showBottom ? '1px solid' : 'none',
        borderColor: lineColor,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: GUIDE_POSITION,
          width: '1px',
          bgcolor: lineColor,
          display: { xs: 'none', md: 'block' },
        }}
      />
      {showTop && (
        <>
          <Cross lineColor={lineColor} sx={{ top: 0, left: EDGE_INSET, transform: 'translate(-50%, -50%)' }} />
          <Cross lineColor={lineColor} sx={{ top: 0, right: GUIDE_POSITION, transform: 'translate(50%, -50%)', display: { xs: 'none', md: 'block' } }} />
          <Cross lineColor={lineColor} sx={{ top: 0, right: EDGE_INSET, transform: 'translate(50%, -50%)' }} />
        </>
      )}
      {showBottom && (
        <>
          <Cross lineColor={lineColor} sx={{ bottom: 0, left: EDGE_INSET, transform: 'translate(-50%, 50%)' }} />
          <Cross lineColor={lineColor} sx={{ bottom: 0, right: GUIDE_POSITION, transform: 'translate(50%, 50%)', display: { xs: 'none', md: 'block' } }} />
          <Cross lineColor={lineColor} sx={{ bottom: 0, right: EDGE_INSET, transform: 'translate(50%, 50%)' }} />
        </>
      )}
      {children}
    </Box>
  );
}

export default GridFrame;
