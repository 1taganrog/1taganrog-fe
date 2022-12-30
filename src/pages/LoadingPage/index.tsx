import {CircularProgress, Box, Typography} from '@mui/material'
// src
// import Logo from 'public/assets/logo.png'
const Logo = ''
export default function LoadingScreen(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 1, height: 1 }}>
      <Box component='img' src={Logo} alt='Красоты Таганрога' />
      <Typography>Loading...</Typography>
      <CircularProgress size={18} />
    </Box>
  )
}

