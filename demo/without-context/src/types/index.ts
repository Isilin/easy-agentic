export type Status = 'todo' | 'inprogress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  createdAt: number;
}

export interface Column {
  id: Status;
  label: string;
}

export const STATUSES: Status[] = ['todo', 'inprogress', 'done'];

export const COLUMNS: Column[] = [
  { id: 'todo', label: 'À faire' },
  { id: 'inprogress', label: 'En cours' },
  { id: 'done', label: 'Terminé' },
];
