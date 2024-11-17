import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Investments.css';
import Loading from '../loading/Loading';
import { IoLogOut, IoArrowBackCircle } from "react-icons/io5";
import InvestmentCards from './InvestmentCards/InvestmentCards';

export default function Investments() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const backToLogin = () => {
        navigate('/');
    };

    const dashboard = () => {
        navigate('/dashboard');
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
                            <IoArrowBackCircle
                                className='logout-icon'
                                onClick={dashboard}
                            />
                            <h1>Controle Financeiro de Investimentos</h1>
                            <IoLogOut
                                className='logout-icon'
                                onClick={backToLogin}
                            />
                        </div>
                        <div className='container-value'>
                            <InvestmentCards link='sofisa-invest' name='Banco Sofisa Investimentos' />
                            <InvestmentCards link='nu-invest' name='Banco Nubank Investimentos' />
                            <p>Função ainda não implementada pelo Dev!</p>
                        </div>
                    </div>
            }
        </section>
    )
}
