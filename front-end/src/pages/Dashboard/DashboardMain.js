import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Row from '../components/styledComponents/Row';
import Col6 from '../components/styledComponents/Col6';
import Calender from '../components/Calender/Calender';
import Appointments from './Appointments/Appointments';

const DashboardMain = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Box>
            <Row align={'top'} spacing={2}>
                <Col6>
                    <Calender date={date} setDate={setDate}></Calender>
                </Col6>
                <Col6>
                    <Appointments date={date}></Appointments>
                </Col6>
            </Row>
        </Box>
    );
};

export default DashboardMain;