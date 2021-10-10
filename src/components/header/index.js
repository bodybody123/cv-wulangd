import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <Box sx={{
            margin: '2%',
        }}>
            <Button variant='text'>Portofolio</Button>
            <Button variant='text'>Contact</Button>
        </Box>
    )
}

export default Header;