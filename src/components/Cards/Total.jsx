import React from 'react';

import './Cards.css';

export default function Total({ total, expenses, incomes }) {
  return (
    <div>
      <p>{expenses}</p>
      <p>{incomes}</p>
      <p>{total}</p>
    </div>
  )
}
