/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Descripcion from './description';
import { Chiste, Remate } from './info';
import Titulo from './title';

function App2() {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState('');

  const cargarChiste = () => {
    const getChiste = async () => {
      try {
        console.log(getChiste);
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        setInfo(response.data);
      } catch (err) {
        console.error('fallo axios', err);
        setError('El chiste fallo de tan malo que era');
      }
    };
    getChiste();
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Titulo mensaje="Chistes" />
        <Descripcion mensaje="Se utiliza un endpoint de chistes, el cual va generando chistes randoms" />
        <Chiste chiste={info.setup} />
        <Remate remate={info.punchline} />
        {error}
        <button className={styles.AppButton} onClick={cargarChiste} type="button"> Cargar chiste </button>
      </header>
    </div>
  );
}

export default App2;
