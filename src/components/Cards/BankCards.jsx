import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Cards.css';
import Total from './Total';
import ButtonPay from './ButtonPay';

export default function BankCards({ src, transaction, link, name, btn }) {
    const [transactionsList, setTransactionsList] = useState([]); // Estado inicial vazio
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    // Carregar transações do localStorage
    useEffect(() => {
        const fetchTransactions = () => {
            try {
                const storedData = localStorage.getItem(transaction);
                const parsedData = storedData ? JSON.parse(storedData) : [];
                if (Array.isArray(parsedData)) {
                    setTransactionsList(parsedData);
                } else {
                    setTransactionsList([]);
                }
            } catch (error) {
                console.error("Erro ao carregar transações:", error);
                setTransactionsList([]);
            }
        };

        fetchTransactions();
    }, [transaction]);

    // Calcular rendas e despesas
    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));
        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);
        setIncome(`${income}`);
        setExpense(`${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
    }, [transactionsList]);

    // Resetar transações
    const handleResetTransactions = () => {
        localStorage.removeItem(transaction); // Remove do localStorage
        setTransactionsList([]); // Atualiza estado
    };

    // Navegar para o link do banco
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
