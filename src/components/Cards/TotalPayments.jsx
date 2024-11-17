import React from 'react';

import './Cards.css';
import Total from './Total';

export default function TotalPayments({ name }) {
    return (
        <div
            className='container-all-total'
        // handleAdd={handleAdd}
        >
            <h1>{name}</h1>
            <Total total='Função não implementada pelo Dev!' />
        </div>
    )
}
