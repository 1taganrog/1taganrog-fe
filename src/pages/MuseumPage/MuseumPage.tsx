import React from "react";
import { Box } from '@mui/material'
import {Link} from "react-router-dom";

export const MuseumPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 1, height: 1 }}>
      MuseumPage

      <Link to="/">Home page</Link>
      <Link to="/album/4">Album</Link>
      <Link to="/industry/4">Industry</Link>
    </Box>
  )
}


export default MuseumPage