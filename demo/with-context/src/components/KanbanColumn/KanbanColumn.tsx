import type { Todo, TodoStatus } from '../../types';
import { KanbanCard } from '../KanbanCard/KanbanCard';
import { AddTodoDialog } from '../AddTodoDialog/AddTodoDialog';
import styles from './KanbanColumn.module.css';

interface KanbanColumnProps {
  status: TodoStatus;
  label: string;
  todos: Todo[];
  isFirst: boolean;
  isLast: boolean;
  onAddTodo: (title: string, description?: string, status?: TodoStatus) => void;
  onDeleteTodo: (id: string) => void;
  onMoveTodo: (id: string, direction: 'left' | 'right') => void;
}

export function KanbanColumn({
  status,
  label,
  todos,
  isFirst,
  isLast,
  onAddTodo,
  onDeleteTodo,
  onMoveTodo,
}: KanbanColumnProps) {
  return (
    <div className={`${styles.kanbanColumn} ${styles[`kanbanColumn--${status}`] ?? ''}`}>
      <div className={styles.kanbanColumn__header}>
        <h2 className={styles.kanbanColumn__title}>{label}</h2>
        <span className={styles.kanbanColumn__count}>{todos.length}</span>
      </div>
      <div className={`${styles.kanbanColumn__cards} ${todos.length === 0 ? styles['kanbanColumn--empty'] : ''}`}>
        {todos.map(todo => (
          <KanbanCard
            key={todo.id}
            todo={todo}
            onMoveLeft={!isFirst ? () => onMoveTodo(todo.id, 'left') : undefined}
            onMoveRight={!isLast ? () => onMoveTodo(todo.id, 'right') : undefined}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </div>
      <AddTodoDialog status={status} onAdd={onAddTodo} />
    </div>
  );
}
