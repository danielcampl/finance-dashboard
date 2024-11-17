// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import './Dashboard.css';
// import Loading from '../../components/loading/Loading';

// export default function NotFound() {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             setLoading(false);
//         }, 500);
//     }, []);

//     const backToHome = () => {
//         navigate('/');
//       };

//     return (
//         <section>
//             {
//                 loading
//                     ?
//                     <Loading />
//                     :
//                     <div>
//                         <h1>PAGINA NAO ENCONTRADA!</h1>
//                     </div>
//             }
//         </section>
//     )
// }
