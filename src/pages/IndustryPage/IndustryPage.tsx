import React from "react";
import { Box } from '@mui/material'
import {Link} from "react-router-dom";

export const IndustryPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 1, height: 1 }}>
      IndustryPage

      <Link to="/">Home page</Link>
      <Link to="/album/4">Album</Link>
      <Link to="/museums/4">Museum</Link>
    </Box>
  )
}


export default IndustryPage