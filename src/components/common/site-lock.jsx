import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const STORAGE_KEY = 'portfolio_unlocked';
const SITE_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

/**
 * SiteLock 컴포넌트
 *
 * 사이트 전체를 비밀번호로 잠근다. 올바른 비밀번호 입력 시 sessionStorage에 기록하고
 * children을 렌더링한다.
 *
 * Props:
 * @param {node} children - 잠금 해제 후 보여줄 콘텐츠 [Required]
 *
 * Example usage:
 * <SiteLock><App /></SiteLock>
 */
function SiteLock({ children }) {
  const [unlocked, setUnlocked] = useState(sessionStorage.getItem(STORAGE_KEY) === 'true');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  }

  if (unlocked) return children;

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            bgcolor: 'background.paper',
          }}
        >
          <LockRoundedIcon sx={{ fontSize: 36, color: 'accent.main', mb: 1.5 }} />
          <Typography sx={{ color: 'text.primary', fontWeight: 700, mb: 2 }}>
            비공개 페이지입니다
          </Typography>
          <TextField
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="비밀번호"
            fullWidth
            size="small"
            autoFocus
            sx={{ mb: 2 }}
          />
          {error && (
            <Typography sx={{ color: 'error.main', fontSize: '0.8rem', mb: 2 }}>{error}</Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: 'accent.main', color: 'accent.contrastText', '&:hover': { bgcolor: '#33BFAE' } }}
          >
            입장하기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default SiteLock;
