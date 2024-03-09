import React, { useEffect, useState } from 'react';

import Painel from '../components/painel/Painel';
import Start from '../components/loadings/start/Start';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <section>
      {
        loading
          ?
          <Start />
          :
          <Painel />
      }
    </section>
  )
}
