import React, { useEffect, useState } from 'react';

// import Painel from '../components/painel/Painel';
import BankSelect from './BankSelect';
import Loading from '../components/loadings/loading/Loading';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section>
      {
        loading
          ?
          <Loading />
          :
          // <Painel />
          <BankSelect />
      }
    </section>
  )
}
