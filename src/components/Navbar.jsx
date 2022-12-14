import React from 'react';
import { Link } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { logo } from '../utils/constans';
import SearchBar from './SearchBar';


const Navbar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ 
            position: 'sticky', 
            background: '#1e1e1e', 
            top: 0, 
            justifyContent: 'space-between' 
        }}
    >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" height={45} />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>Wv</Typography>
        </Link>
        <SearchBar/>
    </Stack>
);


export default Navbar;