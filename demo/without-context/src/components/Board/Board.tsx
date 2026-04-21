import { useKanban } from '../../hooks/useKanban';
import { COLUMNS } from '../../types';
import Column from '../Column/Column';
import styles from './Board.module.css';

export default function Board() {
  const { tasks, addTask, deleteTask, moveTask } = useKanban();

  return (
    <div className={styles.board}>
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={tasks.filter((t) => t.status === column.id)}
          onAddTask={(title, description) => addTask(column.id, title, description)}
          onDeleteTask={deleteTask}
          onMoveTask={moveTask}
        />
      ))}
    </div>
  );
}
