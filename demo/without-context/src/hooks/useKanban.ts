import { useState, useEffect } from 'react';
import type { Task, Status } from '../types';
import { STATUSES } from '../types';
import { loadTasks, saveTasks } from '../utils/localStorage';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useKanban() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (status: Status, title: string, description: string): void => {
    const newTask: Task = {
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      status,
      createdAt: Date.now(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string): void => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const moveTask = (id: string, direction: 'forward' | 'backward'): void => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        const currentIndex = STATUSES.indexOf(task.status);
        const newIndex =
          direction === 'forward' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0 || newIndex >= STATUSES.length) return task;
        return { ...task, status: STATUSES[newIndex] };
      }),
    );
  };

  return { tasks, addTask, deleteTask, moveTask };
}
