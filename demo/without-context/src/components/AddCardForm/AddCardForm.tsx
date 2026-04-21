import { useState, useRef, useEffect } from 'react';
import styles from './AddCardForm.module.css';

interface AddCardFormProps {
  onAdd: (title: string, description: string) => void;
}

export default function AddCardForm({ onAdd }: AddCardFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!isOpen) {
    return (
      <button className={styles.addButton} onClick={() => setIsOpen(true)}>
        <span className={styles.addIcon}>+</span>
        Ajouter une carte
      </button>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
    >
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Titre de la tâche *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        maxLength={100}
      />
      <textarea
        className={styles.textarea}
        placeholder="Description (optionnelle)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        maxLength={500}
      />
      <div className={styles.formActions}>
        <button type="submit" className={styles.submitBtn} disabled={!title.trim()}>
          Ajouter
        </button>
        <button type="button" className={styles.cancelBtn} onClick={handleCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
}
