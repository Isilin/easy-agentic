import * as AlertDialog from '@radix-ui/react-alert-dialog';
import type { Todo } from '../../types';
import styles from './DeleteTodoDialog.module.css';

interface DeleteTodoDialogProps {
  todo: Todo;
  onConfirm: () => void;
}

export function DeleteTodoDialog({ todo, onConfirm }: DeleteTodoDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          className={styles.deleteTodoDialog__trigger}
          aria-label={`Supprimer la tâche "${todo.title}"`}
        >
          ✕
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.deleteTodoDialog__overlay} />
        <AlertDialog.Content className={styles.deleteTodoDialog__content}>
          <AlertDialog.Title className={styles.deleteTodoDialog__title}>
            Supprimer la tâche
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.deleteTodoDialog__description}>
            Êtes-vous sûr de vouloir supprimer «&nbsp;{todo.title}&nbsp;» ? Cette action est irréversible.
          </AlertDialog.Description>
          <div className={styles.deleteTodoDialog__actions}>
            <AlertDialog.Cancel asChild>
              <button
                className={styles.deleteTodoDialog__cancelBtn}
                aria-label="Annuler la suppression"
              >
                Annuler
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className={styles.deleteTodoDialog__confirmBtn}
                onClick={onConfirm}
                aria-label="Confirmer la suppression"
              >
                Supprimer
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
