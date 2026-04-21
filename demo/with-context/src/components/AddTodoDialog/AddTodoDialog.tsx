import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import type { TodoStatus } from '../../types';
import styles from './AddTodoDialog.module.css';

interface AddTodoDialogProps {
  status: TodoStatus;
  onAdd: (title: string, description?: string, status?: TodoStatus) => void;
}

export function AddTodoDialog({ status, onAdd }: AddTodoDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), description.trim() || undefined, status);
    setTitle('');
    setDescription('');
    setOpen(false);
  }

  function handleOpenChange(isOpen: boolean): void {
    if (!isOpen) {
      setTitle('');
      setDescription('');
    }
    setOpen(isOpen);
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          className={styles.addTodoDialog__trigger}
          aria-label={`Ajouter une tâche dans la colonne ${status}`}
        >
          + Ajouter une tâche
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.addTodoDialog__overlay} />
        <Dialog.Content className={styles.addTodoDialog__content}>
          <Dialog.Title className={styles.addTodoDialog__title}>
            Nouvelle tâche
          </Dialog.Title>
          <form onSubmit={handleSubmit} className={styles.addTodoDialog__form}>
            <div className={styles.addTodoDialog__field}>
              <label htmlFor="todo-title" className={styles.addTodoDialog__label}>
                Titre *
              </label>
              <input
                id="todo-title"
                className={styles.addTodoDialog__input}
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Titre de la tâche"
                required
                autoFocus
              />
            </div>
            <div className={styles.addTodoDialog__field}>
              <label htmlFor="todo-description" className={styles.addTodoDialog__label}>
                Description
              </label>
              <textarea
                id="todo-description"
                className={styles.addTodoDialog__textarea}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description optionnelle"
                rows={3}
              />
            </div>
            <div className={styles.addTodoDialog__actions}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className={styles.addTodoDialog__cancelBtn}
                  aria-label="Annuler l'ajout"
                >
                  Annuler
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className={styles.addTodoDialog__submitBtn}
                aria-label="Ajouter la tâche"
              >
                Ajouter
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
