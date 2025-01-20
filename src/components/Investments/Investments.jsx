import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../Cards/Cards.css';
import Loading from '../loading/Loading';
import InvestmentsCards from './InvestmentsCards';
import { IoLogOut, IoArrowBackCircle } from "react-icons/io5";

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
                            <h1>Meus Investimentos</h1>
                            <IoLogOut
                                className='logout-icon'
                                onClick={backToLogin}
                            />
                        </div>
                        <div className='container-banks'>
                            <InvestmentsCards src={`${'/images/sofisa.png'}`} transaction='transactionsSofisa' link='sofisa' name='Sofisa Direto' />
                        </div>
                    </div>
            }
        </section>
    )
}
