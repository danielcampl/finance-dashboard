import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../banks/Banks.css';
import Finance from '../Finance/Finance';
import Description from '../Description/Description';
import { IoLogOut, IoArrowBackCircle } from "react-icons/io5";

export default function Invest({ transaction, name }) {
  const dataSetAction = `${transaction}`;
  const [transactionsList, setTransactionsList] = useState([]); // Inicializa como lista vazia
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Função para carregar dados do localStorage
  useEffect(() => {
    const fetchTransactions = () => {
      try {
        const storedData = localStorage.getItem(dataSetAction);
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
  }, [dataSetAction]);

  // Calcular rendas, despesas e total
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
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
  }, [transactionsList]);

  // Adicionar transação
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem(dataSetAction, JSON.stringify(newArrayTransactions));
  };

  // Navegar para a tela de login
  const backToLogin = () => {
    navigate('/');
  };

  // Navegar para o painel de despesas
  const dashboard = () => {
    navigate('/investments');
  };

  return (
    <section className='painel-container'>
      <div className='header-content'>
        <IoArrowBackCircle
          className='logout-icon'
          onClick={dashboard}
        />
        <h1>Controle Financeiro {name}</h1>
        <IoLogOut
          className='logout-icon'
          onClick={backToLogin}
        />
      </div>
      <div className='bank-finance-container'>
        <Finance income={income} expense={expense} total={total} />
        <Description
          handleAdd={handleAdd}
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
          transaction={dataSetAction}
        />
      </div>
    </section>
  );
}
