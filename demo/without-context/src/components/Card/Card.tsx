import * as AlertDialog from '@radix-ui/react-alert-dialog';
import type { Task } from '../../types';
import { STATUSES } from '../../types';
import styles from './Card.module.css';

interface CardProps {
  task: Task;
  onDelete: (id: string) => void;
  onMove: (id: string, direction: 'forward' | 'backward') => void;
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
  });
}

export default function Card({ task, onDelete, onMove }: CardProps) {
  const currentIndex = STATUSES.indexOf(task.status);
  const canMoveBack = currentIndex > 0;
  const canMoveForward = currentIndex < STATUSES.length - 1;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{task.title}</h3>
        {task.description && (
          <p className={styles.description}>{task.description}</p>
        )}
        <span className={styles.date}>{formatDate(task.createdAt)}</span>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.moveBtn}
          onClick={() => onMove(task.id, 'backward')}
          disabled={!canMoveBack}
          aria-label="Déplacer vers la colonne précédente"
          title="Reculer"
        >
          ◀
        </button>
        <button
          className={styles.moveBtn}
          onClick={() => onMove(task.id, 'forward')}
          disabled={!canMoveForward}
          aria-label="Déplacer vers la colonne suivante"
          title="Avancer"
        >
          ▶
        </button>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button
              className={styles.deleteBtn}
              aria-label="Supprimer la tâche"
              title="Supprimer"
            >
              ✕
            </button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className={styles.dialogOverlay} />
            <AlertDialog.Content className={styles.dialogContent}>
              <AlertDialog.Title className={styles.dialogTitle}>
                Supprimer la tâche
              </AlertDialog.Title>
              <AlertDialog.Description className={styles.dialogDescription}>
                Êtes-vous sûr de vouloir supprimer{' '}
                <strong>« {task.title} »</strong> ? Cette action est
                irréversible.
              </AlertDialog.Description>
              <div className={styles.dialogActions}>
                <AlertDialog.Cancel asChild>
                  <button className={styles.dialogCancelBtn}>Annuler</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button
                    className={styles.dialogConfirmBtn}
                    onClick={() => onDelete(task.id)}
                  >
                    Supprimer
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </div>
  );
}
