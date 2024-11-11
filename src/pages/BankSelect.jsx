import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../components/painel/Dashboard.css';
import { IoLogOut } from "react-icons/io5";
import Banks from '../components/painel/Banks';

export default function BankSelect() {
  const bankTransactions = [
    'transactionsItau',
    'transactionsNubank',
    'transactionsAmazon',
    'transactionsInter',
    'transactionsPicpay'
  ];
  const data = localStorage.getItem({bankTransactions});
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate('/');
  };

  useEffect(() => {
    const amountExpense = transactionsList.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
    const amountIncome = transactionsList.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
  }, [transactionsList]);

  // const handleAdd = (transaction) => {
  //   const newArrayTransactions = [...transactionsList, transaction];
  //   setTransactionsList(newArrayTransactions);
  //   localStorage.setItem([
  //     'transactionsItau',
  //     'transactionsNubank',
  //     'transactionsAmazon',
  //     'transactionsInter',
  //     'transactionsPicpay'
  //   ], JSON.stringify(newArrayTransactions));
  // }

  return (
    <section className='painel-container'>
      <div className='header-content'>
        <h1>Controle Financeiro Bancários</h1>
        <IoLogOut
          className='logout-icon'
          onClick={backToLogin}
        />
      </div>
      <div className='container-value'>
        <Banks
          total={total}
        />
      </div>
    </section>
  )
}
