import Board from './components/Board/Board';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>📋 Tableau Kanban</h1>
        <p className={styles.subtitle}>Gérez vos tâches en un coup d'œil</p>
      </header>
      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}
