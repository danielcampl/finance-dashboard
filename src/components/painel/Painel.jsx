import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Dashboard.css';
import Finance from './Finance';
import Description from './Description';
import { IoLogOut } from "react-icons/io5";
// import formatCurrency from '../../utils/formatCurrency';

export default function Painel() {
  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
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
    // setIncome(formatCurrency(income, 'BRL'));
    // setExpense(formatCurrency(expense, 'BRL'));
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  }

  return (
    <section className='painel-container'>
      <div className='header-content'>
        <h1>Controle Financeiro</h1>
        <IoLogOut
          className='logout-icon'
          onClick={backToLogin}
        />
      </div>
      <div className='container-value'>
        <Finance income={income} expense={expense} total={total} />
        <Description handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      </div>
    </section>
  )
}
