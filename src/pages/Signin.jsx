import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Box } from '@mui/material';
import FirebaseData from '../firebaseConfig/index';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { auth } = FirebaseData();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Sign-in successful', userCredential.user);

            // Redirect the user to another page after successful sign-in
            navigate('/messages'); // Replace '/dashboard' with the desired route
        } catch (error) {
            console.error('Error signing in:', error.message);
            setErrorMessage('Sign-in failed. Please check your email and password.');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Paper elevation={3} sx={{ padding: '20px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Admin Panel
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        style={{ marginBottom: "30px" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleSignIn}>
                        Sign In
                    </Button>
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                </Paper>
            </Box>
        </Container>
    );
};

export default Signin;
