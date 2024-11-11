import React from 'react';
import { useNavigate } from "react-router-dom";

import './Banks.css';

export default function Banks({ total }) {
  // const banks = ['itau', 'nubank', 'amazon', 'inter', 'picpay'];
  // const mapBanks = banks.map((item, index) => item[index]);  

  const banks = [
    { name: 'Itau'},
    { name: 'Nubank' },
    { name: 'Amazon' },
    { name: 'Inter' },
    { name: 'Picpay' },
  ];
  const navigate = useNavigate();
  

  return (
    <div className='all-content-banks'>
      {banks.map((item) => (
        <div
          className='top-content-banks'
          onClick={() => navigate(`/${item.name}`)}
        >
          <div className='values-banks'>
            <div>
              <h4>
                {item.name}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
