import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Cards.css';
import Total from './Total';

export default function BankCards({ src, transaction, link, name }) {
    const data = localStorage.getItem(`${transaction}`);
    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    const hadleBankLink = () => {
        navigate(`/${link}`);
    };

    useEffect(() => {
        const amountExpense = transactionsList.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncome = transactionsList.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);
        setIncome(`${income}`);
        setExpense(`${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
        console.log(expense);

    }, [transactionsList, income, expense, total]);

    return (
        <div
            className='container-bankcard'
            onClick={hadleBankLink}
        >
            <div className='title-cards'>
                <img className='logo-img' src={`${src}`} alt={`${src}`} />
                <h1>{name}</h1>
            </div>
            <Total
                total={`${total}`}
                expenses={`${Number(expense) === Number(0) ? '' : '-'}R$ ${expense}`}
                incomes={`R$ ${income}`}
            />
        </div>
    )
}
