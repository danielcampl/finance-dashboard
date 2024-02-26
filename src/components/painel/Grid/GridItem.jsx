import React from 'react';

import * as C from './GridStyles.js';
import { IoTrashBinSharp } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function GridItem({ item, onDelete }) {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td>
        {item.expense ? (
          <IoArrowDownCircleOutline color='red' />
        ) : (
          <IoArrowUpCircleOutline color='green' />
        )}
      </C.Td>
      <C.Td>
        <IoTrashBinSharp onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  )
}
