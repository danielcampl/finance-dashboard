import React from 'react';

import './Loading.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className='loading-content'>
      <AiOutlineLoading3Quarters className='loading-img' />
      <p>Seu melhor investimento é aqui...</p>
    </div>
  )
}
