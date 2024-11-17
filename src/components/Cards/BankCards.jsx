import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Cards.css';
import Total from './Total';

export default function BankCards({ transaction, link, name }) {
    const data = localStorage.getItem(`${transaction}`);
    // const dataSetAction = `${transaction}`;
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
        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
    }, [transactionsList]);

    // const handleAdd = (transaction) => {
    //     const newArrayTransactions = [...transactionsList, transaction];
    //     setTransactionsList(newArrayTransactions);
    //     localStorage.setItem(dataSetAction, JSON.stringify(newArrayTransactions));
    //   }

    return (
        <div
            className='container-bankcard'
            onClick={hadleBankLink}
            // handleAdd={handleAdd}
        >
            <h1>{name}</h1>
            <Total total={total} />
        </div>
    )
}
