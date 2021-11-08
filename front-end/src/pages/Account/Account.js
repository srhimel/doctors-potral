import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Row from '../components/styledComponents/Row';
import Col5 from '../components/styledComponents/Col5';
import Col7 from '../components/styledComponents/Col7';
import login from '../../images/login.png';
import Paper from '@mui/material/Paper';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const Account = () => {
    const { setError, googleSinIn, setIsLoading } = useAuth();
    const [logPage, setLogPage] = useState('register');
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state?.from || '/';
    const handleLogPage = () => {
        logPage === 'register' ? setLogPage('login') : setLogPage('register');
        setError("");
    }
    const handleGoogleSignIn = () => {
        googleSinIn()
            .then(() => {
                navigate(url)
                setError("")
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }
    return (
        <Box sx={{ backgroundImage: `url(${login})`, backgroundRepeat: 'no-repeat', backgroundSize: '70vh', minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundPosition: '90% 100%' }}>
            <Container>
                <Row style={{}}>
                    <Col5>
                        <Paper sx={{ p: 5, borderRadius: 0, boxShadow: '0 0 10px #EAEEF3' }}>
                            {logPage === 'register' ? <Registration /> : <Login />}
                            <Typography variant="body1" color="initial">{logPage === 'register' ? "Already Have an Account ?" : "Don't have an account? "}    <span style={{ color: "#1CC7C1", cursor: 'pointer', textDecoration: 'underline' }} onClick={handleLogPage}> {logPage === 'register' ? "Login Here" : "Register"}</span></Typography>

                            <Button onClick={handleGoogleSignIn} variant="contained" sx={{ bgcolor: '#222', color: '#fff', mt: 2, width: 1, borderRadius: 0, ':hover': { bgcolor: '#000' } }}>
                                Login With Google

                            </Button>
                        </Paper>

                    </Col5>
                    <Col7>
                    </Col7>
                </Row>
            </Container>
        </Box>
    );
};

export default Account;