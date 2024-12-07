import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Cards.css';
import Total from './Total';
import ButtonPay from './ButtonPay';

export default function BankCards({ src, transaction, link, name, btn }) {
    const data = localStorage.getItem(transaction);
    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const amountExpense = transactionsList.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncome = transactionsList.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);
        setIncome(`${income}`);
        setExpense(`${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
    }, [transactionsList]);

    const handleResetTransactions = () => {
        // Apagar todas as transações desse banco
        localStorage.removeItem(transaction);
        setTransactionsList([]);
    };

    const hadleBankLink = () => {
        navigate(`/${link}`);
    };

    return (
        <div
            className='container-bankcard'
            onClick={hadleBankLink}
        >
            <div className='title-cards'>
                <img className='logo-img' src={src} alt={name} />
                <h1>{name}</h1>
            </div>
            <div className='content-value-btn'>
                <Total
                    total={total}
                    expenses={`${Number(expense) === Number(0) ? '' : '-'}R$ ${expense}`}
                    incomes={`R$ ${income}`}
                />
                <ButtonPay
                    desc={transaction === 'transactionsReceived' ? 'Zerar' : 'Pagar'}
                    onConfirm={handleResetTransactions}
                />
            </div>
        </div>
    );
}
