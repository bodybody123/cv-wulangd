import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { 
    List, 
    ListItem,
    ListItemText, 
    Button, 
    TextField, 
    Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const skillset = [
    {
        skill: 'HTML, CSS, JavaScript',
        years: '3'
    },
    {
        skill: 'PHP',
        years: '1.5'
    },
    {
        skill: 'React',
        years: '1'
    },
    {
        skill: 'Node.JS',
        years: '1.5'
    },
    {
        skill: 'Kotlin',
        years: '1'
    },
]

const Home = () => {
    return (
        <>
        <Box>
            <Typography 
                variant='h1' 
                align='right'>MEET</Typography>
            <Typography 
                variant='h2' 
                align='right'>Wulang Dhanadipa</Typography>
        </Box>
        <Box sx={{
            my: '5%'
        }}>
            <Typography
                variant='h3'>
                Your next web developer
            </Typography>
        </Box>
        <Grid 
            container 
            spacing={1} 
            direction={{ 
                xs: 'column-reverse',
                md: 'row' }}>
            <Grid 
                item 
                container 
                md={6} 
                sx={{ alignContent: 'center' }}>

                <Typography
                    variant='body1'
                    sx={{ fontSize: '2.25rem', lineHeight: '1.3' }}>
                    I’ve been a web developer for over 3 
                    years working with React.js and 
                    some backend languages like php 
                    and node. js
                </Typography>
            </Grid>
            <Grid item md={6}>
                <img src="img/code.jpg" alt="Laptop with opening PHP project"/>
            </Grid>
        </Grid>
        <Divider />

        <Box id='portofolio'>
            <Typography 
                variant='h3'>
                PORTOFOLIO</Typography>
            <Grid container>
                <Grid 
                    item 
                    container 
                    direction='column' 
                    justifyContent='center' 
                    sx={{ 
                        alignItems: 'center', 
                        alignContent:'space-around' }}>

                    <figure>
                    <Box sx={{ maxWidth: '260px' }}>
                        <img 
                            src="img/portofolio/1.png" 
                            alt="Peparnas website portal"/>
                    </Box>
                    <Typography 
                        component='figcaption' 
                        variant='subtitle1'>
                        Peparnas portal website</Typography>
                    </figure>

                </Grid>
            </Grid>
        </Box>
        <Divider />

        <Box>
            <Typography variant='h3'>
                SKILLSET</Typography>
            <Box>
                <List>
                    {skillset.map((val, id) => {
                        return (
                            <ListItem key={id} sx={{ justifyContent: 'space-between' }}>
                                <ListItemText 
                                    sx={{ maxWidth: 'max-content' }}>
                                    {val.skill}
                                </ListItemText>
                                <ListItemText 
                                    sx={{ maxWidth: 'max-content' }}>
                                    {val.years} Years
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Box>
        <Divider />

        <Box id='contact'>
            <Typography
                align='center'
                variant='h3'>Interested ?</Typography>

            <Typography 
                align='center'
                variant='h4'>Contact me</Typography>
            <Grid 
                container 
                component='form'
                direction='column'
                justifyContent='center'
                spacing={2}
                sx={{ 
                    m: 'auto', 
                    maxWidth: '600px'}}>

                <Grid item>
                    <TextField 
                        label="name" 
                        variant="outlined" 
                        fullWidth/>
                </Grid>
                <Grid item>
                    <TextField 
                        multiline 
                        rows={5} 
                        label="message"
                        variant="outlined" 
                        fullWidth/>
                </Grid>
                <Button 
                    sx={{ 
                        maxWidth: 'max-content',
                        alignSelf: 'end' }} 
                        variant="text">
                            SEND</Button>

            </Grid>
        </Box>
        <Divider />

        <Box>
            <Typography 
                align='center'
                variant='h3'>
                Social Media</Typography>
            <Box sx={{ m: 'auto', maxWidth:'max-content' }}>
                <Link href="https://github.com/bodybody123">
                    <GitHubIcon sx={{ fontSize: 64 }}/>
                </Link>
            </Box>
        </Box>
        </>
    )
}

export default Home;