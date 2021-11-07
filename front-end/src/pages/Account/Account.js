import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Row from '../components/styledComponents/Row';
import Col5 from '../components/styledComponents/Col5';
import Col7 from '../components/styledComponents/Col7';
import login from '../../images/login.png';
import Paper from '@mui/material/Paper';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import useAuth from '../../hooks/useAuth';
const Account = () => {
    const { setError } = useAuth();
    const [logPage, setLogPage] = useState('register');
    const handleLogPage = () => {
        logPage === 'register' ? setLogPage('login') : setLogPage('register');
        setError("");
    }
    return (
        <Box sx={{ backgroundImage: `url(${login})`, backgroundRepeat: 'no-repeat', backgroundSize: '70vh', minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundPosition: '90% 100%' }}>
            <Container>
                <Row style={{}}>
                    <Col5>
                        <Paper sx={{ p: 5, borderRadius: 0, boxShadow: '0 0 10px #EAEEF3' }}>
                            {logPage === 'register' ? <Registration /> : <Login />}
                            <Typography variant="body1" color="initial">{logPage === 'register' ? "Already Have an Account ?" : "Don't have an account? "}    <span style={{ color: "#1CC7C1", cursor: 'pointer', textDecoration: 'underline' }} onClick={handleLogPage}> {logPage === 'register' ? "Login Here" : "Register"}</span></Typography>
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