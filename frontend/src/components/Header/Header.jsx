import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MyLibrary</h1> 
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Adicionar</Link>
        </nav>
      </div>
    </header>
  );
}