import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './InvestmentCards.css';
import Total from '../../Cards/Total';

export default function InvestmentCards({ transaction, link, name }) {
    // const data = localStorage.getItem(`${transaction}`);
    // const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
    // const [income, setIncome] = useState(0);
    // const [expense, setExpense] = useState(0);
    // const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    const hadleInvestmentLink = () => {
        navigate(`/${link}`);
    };

    return (
        <div
            className='container-investment-card'
            onClick={hadleInvestmentLink}
        >
            <h1>{name}</h1>
        </div>
    )
}
