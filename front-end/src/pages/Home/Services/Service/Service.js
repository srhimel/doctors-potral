import React from 'react';
import Col4 from '../../../components/styledComponents/Col4';
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import whitening from '../../../../images/whitening.png'
import Typography from '@mui/material/Typography'



const Service = () => {
    return (
        <>
            <Col4>
                <img src={fluoride} alt="" style={{ height: '100px' }} />
                <Typography variant="h4" color="#565E69" sx={{ my: 3 }}>Fluoride Treatment</Typography>
                <Typography variant="body1" color="#B4B4B4" sx={{ fontSize: '18px', lineHeight: '34px', fontWeight: 400 }}>Do you have gummy problem. we can fix it by applying fluoride on your teeth, it will shine like a dog with cow</Typography>
            </Col4>
            <Col4>
                <img src={cavity} alt="" style={{ height: '100px' }} />
                <Typography variant="h4" color="#565E69" sx={{ my: 3 }}>Fluoride Treatment</Typography>
                <Typography variant="body1" color="#B4B4B4" sx={{ fontSize: '18px', lineHeight: '34px', fontWeight: 400 }}>Do you have gummy problem. we can fix it by applying fluoride on your teeth, it will shine like a dog with cow</Typography>
            </Col4>
            <Col4>
                <img src={whitening} alt="" style={{ height: '100px' }} />
                <Typography variant="h4" color="#565E69" sx={{ my: 3 }}>Fluoride Treatment</Typography>
                <Typography variant="body1" color="#B4B4B4" sx={{ fontSize: '18px', lineHeight: '34px', fontWeight: 400 }}>Do you have gummy problem. we can fix it by applying fluoride on your teeth, it will shine like a dog with cow</Typography>
            </Col4>
        </>
    );
};

export default Service;