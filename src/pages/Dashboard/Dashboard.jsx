import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Dashboard.css';
import Loading from '../../components/loading/Loading';
import { IoLogOut } from "react-icons/io5";

export default function Dashboard() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const backToLogin = () => {
        navigate('/');
    };

    const goToExpenses = () => {
        navigate('/expenses');
    };

    const goToInvest = () => {
        navigate('/investments');
    };

    return (
        <section>
            {
                loading
                    ?
                    <Loading />
                    :
                    <div>
                        <div className='header-content'>
                            <h1>Controle Financeiro</h1>
                            <IoLogOut
                                className='logout-icon'
                                onClick={backToLogin}
                            />
                        </div>
                        <div className='container-value-dash'>
                            <div className='container-bankcard-dashboard' onClick={goToExpenses}>
                                <h1>Financeiros do Mês</h1>
                            </div>
                            <div className='container-bankcard-dashboard' onClick={goToInvest}>
                                <h1>Investimentos</h1>
                            </div>
                        </div>
                    </div>
            }
        </section>
    )
}
