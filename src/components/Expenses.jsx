import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Cards/Cards.css';
import Loading from './loading/Loading';
import BankCards from './Cards/BankCards';
import { IoLogOut, IoArrowBackCircle } from "react-icons/io5";
import TotalPayments from './Cards/TotalPayments';

export default function Expenses() {
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
                            <h1>Controle Financeiro de Gastos</h1>
                            <IoLogOut
                                className='logout-icon'
                                onClick={backToLogin}
                            />
                        </div>
                        <div className='container-banks'>
                            <BankCards src={`${'/images/bradescard.png'}`} transaction='transactionsAmazon' link='amazon' name='Bradescard Amazon' />
                            <BankCards src={`${'/images/itau.png'}`} transaction='transactionsItau' link='itau' name='Banco Itau' />
                            <BankCards src={`${'/images/inter.png'}`} transaction='transactionsInter' link='inter' name='Banco Inter' />
                            <BankCards src={`${'/images/nubank.png'}`} transaction='transactionsNubank' link='nubank' name='Banco Nubank' />
                            <BankCards src={`${'/images/picpay.png'}`} transaction='transactionsPicpay' link='picpay' name='Banco Picpay' />
                            <BankCards src={`${'/images/c6.png'}`} transaction='transactionsC6' link='c6' name='Banco C6 Bank' />
                            <BankCards src={`${'/images/pix.png'}`} transaction='transactionsReceived' link='received' name='Pagamentos recebidos' />
                            <TotalPayments
                                transaction='transactionsReceived'
                                name='Total dos gastos mensais'
                            />
                        </div>
                    </div>
            }
        </section>
    )
}
