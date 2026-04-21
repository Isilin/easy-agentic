export type TodoStatus = 'todo' | 'in-progress' | 'done';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  createdAt: string; // ISO 8601
}

export const COLUMNS: { status: TodoStatus; label: string }[] = [
  { status: 'todo',        label: 'À faire'  },
  { status: 'in-progress', label: 'En cours' },
  { status: 'done',        label: 'Terminé'  },
];
