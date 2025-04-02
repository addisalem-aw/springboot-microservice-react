import React, { useState } from 'react';
import { registerUser, loginUser } from '../api';
import { TextField, Button, Container, Typography } from '@mui/material';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = async () => {
        await registerUser({ email, password });
        alert('Registration successful');
    };
    
    const handleLogin = async () => {
        await loginUser({ email, password });
        alert('Login successful');
    };
    
    return (
        <Container>
            <Typography variant="h4">Authentication</Typography>
            <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
            <Button variant="contained" color="secondary" onClick={handleLogin}>Login</Button>
        </Container>
    );
};

export default Auth;