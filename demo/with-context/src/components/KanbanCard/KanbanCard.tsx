import type { Todo } from '../../types';
import { DeleteTodoDialog } from '../DeleteTodoDialog/DeleteTodoDialog';
import styles from './KanbanCard.module.css';

interface KanbanCardProps {
  todo: Todo;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
  onDelete: () => void;
}

export function KanbanCard({ todo, onMoveLeft, onMoveRight, onDelete }: KanbanCardProps) {
  return (
    <div className={styles.kanbanCard}>
      <div className={styles.kanbanCard__content}>
        <p className={styles.kanbanCard__title}>{todo.title}</p>
        {todo.description && (
          <p className={styles.kanbanCard__description}>{todo.description}</p>
        )}
      </div>
      <div className={styles.kanbanCard__actions}>
        {onMoveLeft && (
          <button
            className={styles.kanbanCard__actionBtn}
            onClick={onMoveLeft}
            aria-label="Déplacer vers la colonne précédente"
          >
            ←
          </button>
        )}
        {onMoveRight && (
          <button
            className={styles.kanbanCard__actionBtn}
            onClick={onMoveRight}
            aria-label="Déplacer vers la colonne suivante"
          >
            →
          </button>
        )}
        <DeleteTodoDialog todo={todo} onConfirm={onDelete} />
      </div>
    </div>
  );
}
