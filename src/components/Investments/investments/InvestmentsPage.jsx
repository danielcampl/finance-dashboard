import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

// import Finance from '../Finance/Finance';
// import Description from '../Description/Description';
import { IoLogOut, IoArrowBackCircle } from "react-icons/io5";

export default function InvestmentsPage({ transaction, name }) {
  const [state, setState] = useState({
    initialInvestment: 0,
    interestRate: 0,
    periodInMonths: 0,
  });

  const total = handleCalculateInterest(state.initialInvestment, state.interestRate, state.periodInMonths).toFixed(2);
  const earnings = (total - state.initialInvestment).toFixed(2);

  // const data = localStorage.getItem(`${transaction}`);
  // const dataSetAction = `${transaction}`;
  // const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  // const [income, setIncome] = useState(0);
  // const [withdraw, setWithdraw] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [dividends, setDividends] = useState(0);
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate('/');
  };

  const dashboard = () => {
    navigate('/investments');
  };

  // useEffect(() => {
  //   const amountExpense = transactionsList.filter((item) => item.withdraw).map((transaction) => Number(transaction.amount));
  //   const amountIncome = transactionsList.filter((item) => !item.withdraw).map((transaction) => Number(transaction.amount));

  //   const withdraw = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  //   const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

  //   const total = Math.abs(income - withdraw).toFixed(2);
  //   setIncome(`R$ ${income}`);
  //   setWithdraw(`R$ ${withdraw}`);
  //   setTotal(`${Number(income) < Number(withdraw) ? '-' : ''}R$ ${total}`);
  // }, [transactionsList]);

  // const handleAdd = (transaction) => {
  //   const newArrayTransactions = [...transactionsList, transaction];
  //   setTransactionsList(newArrayTransactions);
  //   localStorage.setItem(dataSetAction, JSON.stringify(newArrayTransactions));
  // }

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
      <div>
        <div>
          <input
            value={state.initialInvestment}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                initialInvestment: Number(e.target.value),
              }))
            }
            type='number'
            placeholder='Valor Inicial'
          />
          <input
            value={state.interestRate}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                interestRate: Number(e.target.value),
              }))
            }
            type='number'
            placeholder='Taxa de Juros (%)'
          />
          <input
            value={state.periodInMonths}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                periodInMonths: Number(e.target.value),
              }))
            }
            type='number'
            placeholder='Prazo (meses)'
          />
        </div>
        <div>
          <div>
            <p>Total de Ganho em Juros: R$ {earnings}</p>
            <p>Total: R$ {total}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const handleCalculateInterest = (initialInvestment, interestRate, periodInMonths) => {
  return initialInvestment * (1 + interestRate / 100) ** periodInMonths;
};