import React from 'react';
// { useEffect, useState }

import Login from '../components/login/Login';
// import Loading from '../components/loadings/loading/Loading';

export default function Home() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4500);
  // }, []);

  return (
    <section>
      {/* {
        loading
          ?
          <Loading />
          :
          <Login />
      } */}
      <Login />
    </section>
  )
}
