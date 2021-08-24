import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsR50BnsVNurNDBmk3kpEf7AEZmL01FQK_83MUmf2MEiSSSd6I4RGF8dNny4Bla6BFQIA&usqp=CAU" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://clientes.rltelecon.com.br/template/teste/assets/img/netflix.png" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}