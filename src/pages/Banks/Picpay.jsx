import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../../components/painel/Dashboard.css';
import Finance from '../../components/painel/Finance';
import Description from '../../components/painel/Description';
import { IoLogOut, IoArrowBackCircle } from "react-icons/io5";
// import formatCurrency from '../../utils/formatCurrency';

export default function Picpay() {
  const data = localStorage.getItem('transactionsPicpay');
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate('/');
  };

  const dashboard = () => {
    navigate('/dashboard');
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
    const newArrayTransactionsPicpay = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactionsPicpay);
    localStorage.setItem('transactionsPicpay', JSON.stringify(newArrayTransactionsPicpay));
  }

  return (
    <section className='painel-container'>
      <div className='header-content'>
        <IoArrowBackCircle
          className='logout-icon'
          onClick={dashboard}
        />
        <h1>Controle Financeiro Picpay</h1>
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
