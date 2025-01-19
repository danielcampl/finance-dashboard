import React, { useEffect, useState } from 'react';

import './Cards.css';
import Total from './Total';

export default function TotalPayments({ name }) {
    const keys = [
        'transactionsAmazon',
        'transactionsItau',
        'transactionsInter',
        'transactionsNubank',
        'transactionsPicpay',
        'transactionsC6',
        'transactionsReceived'
    ];

    const [payments, setPayments] = useState({
        amazonPay: [],
        itauPay: [],
        interPay: [],
        nubankPay: [],
        picpayPay: [],
        c6Pay: [],
        receivedPay: []
    });
    const [total, setTotal] = useState(0);
    const [incomes, setIncomes] = useState(0);
    const [expenses, setExpenses] = useState(0);

    // Carregar dados do localStorage de forma segura
    useEffect(() => {
        const fetchPayments = () => {
            const data = {};
            keys.forEach((key) => {
                try {
                    const storedData = localStorage.getItem(key);
                    data[key] = storedData ? JSON.parse(storedData) : [];
                } catch (error) {
                    console.error(`Erro ao carregar ${key}:`, error);
                    data[key] = [];
                }
            });
            setPayments({
                amazonPay: data.transactionsAmazon,
                itauPay: data.transactionsItau,
                interPay: data.transactionsInter,
                nubankPay: data.transactionsNubank,
                picpayPay: data.transactionsPicpay,
                c6Pay: data.transactionsC6,
                receivedPay: data.transactionsReceived
            });
        };

        fetchPayments();
    }, []);

    // Atualizar totais
    useEffect(() => {
        const calculateTotals = () => {
            let totalIncome = 0;
            let totalExpense = 0;

            Object.values(payments).forEach((paymentArray) => {
                const income = paymentArray
                    .filter((item) => !item.expense)
                    .map((transaction) => Number(transaction.amount))
                    .reduce((acc, cur) => acc + cur, 0);

                const expense = paymentArray
                    .filter((item) => item.expense)
                    .map((transaction) => Number(transaction.amount))
                    .reduce((acc, cur) => acc + cur, 0);

                totalIncome += income;
                totalExpense += expense;
            });

            setIncomes(totalIncome.toFixed(2));
            setExpenses(totalExpense.toFixed(2));
            setTotal(
                `${totalIncome < totalExpense ? '-' : ''}R$ ${Math.abs(totalIncome - totalExpense).toFixed(2)}`
            );
        };

        calculateTotals();
    }, [payments]);

    return (
        <div className='container-bankcard total-card'>
            <h1>{name}</h1>
            <Total
                total={`Subtotal: ${total}`}
                expenses={`Total gasto: ${Number(expenses) === 0 ? '' : '-'}R$ ${expenses}`}
                incomes={`Total recebido: R$ ${incomes}`}
            />
        </div>
    );
}
