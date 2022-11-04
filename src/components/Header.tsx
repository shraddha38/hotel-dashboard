import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        m: 3,
                    }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div"> Hotel Findings</Typography>

                    </Box>


                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}>
                        <Button sx={{
                            backgroundColor: "ButtonShadow", m: 5
                        }}>
                            <Link to="/" >
                                All Hotels
                            </Link>
                        </Button>
                        <br />
                        <Button sx={{
                            backgroundColor: "ButtonShadow", m: 5
                        }}>
                            <Link to="/create" >
                                New Hotels
                            </Link>
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}