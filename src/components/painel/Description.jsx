import React, { useState } from 'react';

import './Dashboard.css';
import Grid from './Grid/Grid';

export default function Description({ handleAdd, transactionsList, setTransactionsList }) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const hadleSaveForm = () => {
    if (!desc || !amount) {
      alert('Informe uma descrição e um valor');
    } else if (amount < 1) {
      alert('O valor deve ser positivo');
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };
    handleAdd(transaction);
    // setDesc('');
    // setAmount('');
  };

  console.log(isExpense);

  return (
    <>
      <div className="mid-content">
        <div className="input-values-container">
          <span>Descrição</span>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="input-values-container">
          <span>Valor</span>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="select-container">
          <div>
            <input
              type="radio"
              id="rIncome"
              name="group1"
              defaultChecked
              onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="rIncome">Entrada</label>
          </div>
          <div>
            <input
              type="radio"
              id="rExpenses"
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="rExpenses">Saída</label>
          </div>
        </div>
        <button
          type='button'
          onClick={hadleSaveForm}
        >
          Adicionar
        </button>
      </div>
      <Grid items={transactionsList} setItems={setTransactionsList} />
    </>
  )
}
