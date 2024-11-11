import React from 'react';

import * as C from './GridStyles.js';
import GridItem from './GridItem.jsx';

export default function Grid({ items, setItems }) {
  const onDelete = (ID) => {
    const newArr = items.filter((transaction) => transaction.id !== ID);
    setItems(newArr);
    localStorage.setItem([
      'transactionsItau',
      'transactionsNubank',
      'transactionsAmazon',
      'transactionsInter',
      'transactionsPicpay'
    ], 
    JSON.stringify(newArr));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10}>Tipo</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {
          items?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))
        }
      </C.Tbody>
    </C.Table>
  )
}
