import { COLUMNS } from '../../types';
import type { Todo, TodoStatus } from '../../types';
import { KanbanColumn } from '../KanbanColumn/KanbanColumn';
import styles from './KanbanBoard.module.css';

interface KanbanBoardProps {
  todos: Todo[];
  onAddTodo: (title: string, description?: string, status?: TodoStatus) => void;
  onDeleteTodo: (id: string) => void;
  onMoveTodo: (id: string, direction: 'left' | 'right') => void;
}

export function KanbanBoard({ todos, onAddTodo, onDeleteTodo, onMoveTodo }: KanbanBoardProps) {
  return (
    <div className={styles.kanbanBoard}>
      <h1 className={styles.kanbanBoard__title}>Tableau Kanban</h1>
      <div className={styles.kanbanBoard__columns}>
        {COLUMNS.map((column, index) => (
          <KanbanColumn
            key={column.status}
            status={column.status}
            label={column.label}
            todos={todos.filter(t => t.status === column.status)}
            isFirst={index === 0}
            isLast={index === COLUMNS.length - 1}
            onAddTodo={onAddTodo}
            onDeleteTodo={onDeleteTodo}
            onMoveTodo={onMoveTodo}
          />
        ))}
      </div>
    </div>
  );
}
