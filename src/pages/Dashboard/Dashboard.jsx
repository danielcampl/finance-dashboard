import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Dashboard.css';
import Loading from '../../components/loading/Loading';
import BankCards from '../../components/Cards/BankCards';
import { IoLogOut } from "react-icons/io5";
import TotalPayments from '../../components/Cards/TotalPayments';

export default function Dashboard() {
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

    return (
        <section>
            {
                loading
                    ?
                    <Loading />
                    :
                    <div>
                        <div className='header-content'>
                            <h1>Controle Financeiro Bancários</h1>
                            <IoLogOut
                                className='logout-icon'
                                onClick={backToLogin}
                            />
                        </div>
                        <div className='container-value'>
                            <BankCards transaction='transactionsAmazon' link='amazon' name='Bradescard Amazon' />
                            <BankCards transaction='transactionsItau' link='itau' name='Banco Itau' />
                            <BankCards transaction='transactionsInter' link='inter' name='Banco Inter' />
                            <BankCards transaction='transactionsNubank' link='nubank' name='Banco Nubank' />
                            <BankCards transaction='transactionsPicpay' link='picpay' name='Banco Picpay' />
                            <BankCards transaction='transactionsC6' link='c6' name='Banco C6 Bank' />
                            <TotalPayments name='Total de Gastos' />
                        </div>
                    </div>
            }
        </section>
    )
}
