import React from 'react';
import { useAuth } from '../../providers/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {

    const { user } = useAuth();

    return (
        <div>
            <h1>Bem vindo ao Sistema <span>{user.name}</span></h1>
        </div>
    );
}

export default Dashboard;