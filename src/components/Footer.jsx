import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="40px"  >
            <Stack gap="40px" alignItems="center" px="40px"  >
              <Typography variant='p' pb="4px" mt="10px" >
                Made with  ❤️ 
              </Typography>
            </Stack>
    </Box>
  )
}

export default Footer
