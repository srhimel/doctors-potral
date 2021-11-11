import React from 'react';
import { Outlet } from 'react-router';
import MiniDrawer from './components/MiniDrawer';

const Dashboard = () => {

    return (
        <div>
            <MiniDrawer>
                <Outlet></Outlet>
            </MiniDrawer>
        </div>
    );
};

export default Dashboard;