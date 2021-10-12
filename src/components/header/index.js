import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <Box sx={{
            margin: '2%',
        }}>
            <Button component='a' href='#portofolio' variant='text'>Portofolio</Button>
            <Button component='a' href='#contact' variant='text'>Contact</Button>
        </Box>
    )
}

export default Header;