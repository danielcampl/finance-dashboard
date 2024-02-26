import React from 'react';

import './Dashboard.css';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function Finance({income, expense, total}) {
  return (
    <div className='top-content'>
      <div className='values'>
        <div className='values-content'>
          <h4>Entrada</h4>
          <IoArrowUpCircleOutline className='money-up' />
        </div>
        <div>
          <p>{income}</p>
        </div>
      </div>
      <div className='values'>
        <div className='values-content'>
          <h4>Saída</h4>
          <IoArrowDownCircleOutline className='money-down' />
        </div>
        <div>
          <p>{expense}</p>
        </div>
      </div>
      <div className='values'>
        <div className='values-content'>
          <h4>Total</h4>
          <MdOutlineAttachMoney className='money-up' />
        </div>
        <div>
          <p>{total}</p>
        </div>
      </div>
    </div>
  )
}
