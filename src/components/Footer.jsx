import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#1B76D2" >
            <Stack gap="40px" alignItems="center" px="40px"  >
              <Typography variant='h6' pb="4px" mt="10px" >
                Made with  ❤️
              </Typography>
            </Stack>
    </Box>
  )
}

export default Footer
