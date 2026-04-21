import type { Column as ColumnType, Task } from '../../types';
import Card from '../Card/Card';
import AddCardForm from '../AddCardForm/AddCardForm';
import styles from './Column.module.css';

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
  onAddTask: (title: string, description: string) => void;
  onDeleteTask: (id: string) => void;
  onMoveTask: (id: string, direction: 'forward' | 'backward') => void;
}

export default function Column({
  column,
  tasks,
  onAddTask,
  onDeleteTask,
  onMoveTask,
}: ColumnProps) {
  return (
    <div className={styles.column} data-status={column.id}>
      <div className={styles.header}>
        <h2 className={styles.title}>{column.label}</h2>
        <span className={styles.badge}>{tasks.length}</span>
      </div>
      <div className={styles.cards}>
        {tasks.length === 0 && (
          <p className={styles.empty}>Aucune tâche</p>
        )}
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onMove={onMoveTask}
          />
        ))}
      </div>
      <AddCardForm onAdd={onAddTask} />
    </div>
  );
}
