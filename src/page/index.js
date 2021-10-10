import React from 'react'
import Home from './home';
import Header from 'components/header';
import Box from '@mui/material/Box';

const Page = () => {
    return (
        <>
        <Header />
        <Box sx={{m:'5%'}}>
            <Home />
        </Box>
        </>
    )
}

export default Page;