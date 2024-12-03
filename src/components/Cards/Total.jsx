import React from 'react';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

import './Cards.css';

export default function Total({ total, expenses, incomes }) {
  return (
    <div>
      <p className='dash-description'><IoArrowDownCircleOutline className='money-down' />{expenses}</p>
      <p className='dash-description'><IoArrowUpCircleOutline className='money-up' />{incomes}</p>
      <p className='dash-description'><MdOutlineAttachMoney className='money-up' />{total}</p>
    </div>
  )
}
