import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

/**
 * SectionContainer 컴포넌트
 *
 * 에디토리얼 스타일 섹션 래퍼. 상단 헤어라인 구분선 + 좌측 정렬 콘텐츠로
 * 여러 섹션이 하나의 흐름처럼 이어지도록 한다.
 *
 * Props:
 * @param {node} children - 섹션 내부 콘텐츠 [Required]
 * @param {string} bgColor - 섹션 배경색 [Optional, 기본값: 'background.default']
 * @param {string} maxWidth - Container 최대 너비 [Optional, 기본값: 'md']
 * @param {boolean} noDivider - 상단 구분선 숨김 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <SectionContainer><Typography>내용</Typography></SectionContainer>
 */
function SectionContainer({ children, bgColor = 'background.default', maxWidth = 'md', noDivider = false }) {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: bgColor,
        borderTop: noDivider ? 'none' : '1px solid',
        borderColor: 'divider',
        py: { xs: 8, md: 13 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      <Container maxWidth={maxWidth} sx={{ textAlign: 'left' }}>
        {children}
      </Container>
    </Box>
  );
}

export default SectionContainer;
