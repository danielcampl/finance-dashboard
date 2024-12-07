import React, { useState } from 'react';
import './Cards.css';

export default function ButtonPay({ desc, transaction, onConfirm }) {
    const data = localStorage.getItem(`${transaction}`);
    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false); // Estado para controlar a visibilidade

    // Alternar visibilidade dos botões
    const toggleConfirmButtons = (event) => {
        event.stopPropagation();
        setIsConfirmVisible((prev) => !prev);
    };

    const cancelFunctions = (event) => {
        event.stopPropagation();
    };

    // Confirmar ação
    const handleClick = (event) => {
        event.stopPropagation(); // Previne o clique de afetar o container do BankCard
        if (onConfirm) {
            onConfirm(); // Chama a função para apagar transações
        }

        // alert(`Suas transações foram apagadas com sucesso!`);
        window.location.reload();
    };

    // Cancelar ação
    const cancelPayment = (event) => {
        event.stopPropagation();
        console.log("Pagamento cancelado!");
        setIsConfirmVisible(false); // Ocultar após cancelar
    };

    return (
        <div className="btn-container-cards">
            {!isConfirmVisible ? (
                <div
                    className="main-btn"
                    onClick={toggleConfirmButtons}
                >
                    <button className="pay-reset-btn">{desc}</button>
                </div>
            ) : (
                <div className="show-btn">
                    <div className='fade' onClick={cancelFunctions} />
                    <div className='modal' onClick={cancelFunctions}>
                        <div className='modal-header'>
                            <h1>Você deseja apagar todas as transações deste banco?</h1>
                        </div>
                        <div className='modal-body'>
                            <button
                                className="cancel-btn"
                                onClick={cancelPayment}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleClick}
                                className="confirm-btn"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
