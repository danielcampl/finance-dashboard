import React, { useEffect, useState } from 'react';

import './Cards.css';
import Total from './Total';

export default function TotalPayments({ name }) {
    const amazonValue = localStorage.getItem(`transactionsAmazon`);
    const itauValue = localStorage.getItem(`transactionsItau`);
    const interValue = localStorage.getItem(`transactionsInter`);
    const nubankValue = localStorage.getItem(`transactionsNubank`);
    const picpayValue = localStorage.getItem(`transactionsPicpay`);
    const c6Value = localStorage.getItem(`transactionsC6`);
    const receivedValue = localStorage.getItem(`transactionsReceived`);

    const [amazonPay, setAmazonPay] = useState(amazonValue ? JSON.parse(amazonValue) : []);
    const [itauPay, setItauPay] = useState(itauValue ? JSON.parse(itauValue) : []);
    const [interPay, setInterPay] = useState(interValue ? JSON.parse(interValue) : []);
    const [nubankPay, setNubankPay] = useState(nubankValue ? JSON.parse(nubankValue) : []);
    const [picpayPay, setPicpayPay] = useState(picpayValue ? JSON.parse(picpayValue) : []);
    const [c6Pay, setC6Pay] = useState(c6Value ? JSON.parse(c6Value) : []);
    const [receivedPay, setReceivedPay] = useState(receivedValue ? JSON.parse(receivedValue) : []);
    const [total, setTotal] = useState(0);
    const [incomes, setIncomes] = useState(0);
    const [expenses, setExpenses] = useState(0);

    useEffect(() => {
        // --AMAZON-- //
        const amountExpenseAmazonPay = amazonPay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomeAmazonPay = amazonPay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expenseAmazonPay = amountExpenseAmazonPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeAmazonPay = amountIncomeAmazonPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalAmazonPay = parseFloat(Math.abs(incomeAmazonPay - expenseAmazonPay).toFixed(2));
        console.log(totalAmazonPay);


        // --ITAU-- //
        const amountExpenseItauPay = itauPay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomeItauPay = itauPay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expenseItauPay = amountExpenseItauPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeItauPay = amountIncomeItauPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalItauPay = parseFloat(Math.abs(incomeItauPay - expenseItauPay).toFixed(2));

        // --INTER-- //
        const amountExpenseInterPay = interPay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomeInterPay = interPay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expenseInterPay = amountExpenseInterPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeInterPay = amountIncomeInterPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalInterPay = parseFloat(Math.abs(incomeInterPay - expenseInterPay).toFixed(2));

        // --NUBANK-- //
        const amountExpenseNubankPay = nubankPay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomeNubankPay = nubankPay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expenseNubankPay = amountExpenseNubankPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeNubankPay = amountIncomeNubankPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalNubankPay = parseFloat(Math.abs(incomeNubankPay - expenseNubankPay).toFixed(2));

        // --PICPAY-- //
        const amountExpensePicpayPay = picpayPay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomePicpayPay = picpayPay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expensePicpayPay = amountExpensePicpayPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomePicpayPay = amountIncomePicpayPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalPicpayPay = parseFloat(Math.abs(incomePicpayPay - expensePicpayPay).toFixed(2));

        // --C6-- //
        const amountExpenseC6Pay = c6Pay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomeC6Pay = c6Pay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expenseC6Pay = amountExpenseC6Pay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeC6Pay = amountIncomeC6Pay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalC6Pay = parseFloat(Math.abs(incomeC6Pay - expenseC6Pay).toFixed(2));

        // --GANHOS DO MES RECEBIDOS-- //
        const amountExpenseReceived = receivedPay.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
        const amountIncomeReceived = receivedPay.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));
        const expenseReceived = amountExpenseReceived.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeReceived = amountIncomeReceived.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const totalReceived = parseFloat(Math.abs(incomeReceived - expenseReceived).toFixed(2));

        // --TOTAL-- //
        setExpenses(
            `
            ${(parseFloat(expenseAmazonPay) +
                parseFloat(expenseItauPay) +
                parseFloat(expenseInterPay) +
                parseFloat(expenseNubankPay) +
                parseFloat(expensePicpayPay) +
                parseFloat(expenseC6Pay))
                .toFixed(2)}
                `
        );
        setIncomes(
            `
            ${(parseFloat(incomeAmazonPay) +
                parseFloat(incomeItauPay) +
                parseFloat(incomeInterPay) +
                parseFloat(incomeNubankPay) +
                parseFloat(incomePicpayPay) +
                parseFloat(incomeC6Pay) +
                totalReceived)
                .toFixed(2)}
                `
        );
        setTotal(
            `${Number(expenses) > Number(incomes) ?
                '-' :
                ''}R$ ${Math.abs(parseFloat(expenses) - parseFloat(incomes)).toFixed(2)}`
        );

    }, [amazonPay, itauPay, interPay, nubankPay, picpayPay, c6Pay, receivedPay, expenses, incomes]);

    return (
        <div
            className='container-bankcard-total'
        >
            <h1>{name}</h1>
            <Total total={`Subtotal: ${total}`} expenses={`Total gasto: ${Number(expenses) === Number(0) ? '' : '-'}R$ ${expenses}`} incomes={`Total recebido: R$ ${incomes}`} />
        </div>
    )
}