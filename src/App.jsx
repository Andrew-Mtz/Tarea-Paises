import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import styles from './App.module.scss';
import Descripcion from './description';
import Titulo from './title';

function App() {
  const [paises, setPaises] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPaises = async () => {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name');
        setPaises(response.data);
      } catch (err) {
        console.error('fallo axios', err);
        setError('Hubo un error al traer los paises');
      }
    };
    getPaises();
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <Titulo mensaje="Paises" />
        <Descripcion mensaje="Se utiliza un endpoint de paises, el cual llena las opciones del select" />
        {error}

        <select className={styles.AppButton} type="button">
          {paises.map((pais) => (
            <option value={pais.name}>{pais.name}</option>
          ))}
        </select>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
