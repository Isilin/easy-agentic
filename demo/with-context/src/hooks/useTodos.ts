import { useState, useEffect } from 'react';
import type { Todo, TodoStatus } from '../types';
import { loadTodos, saveTodos } from '../utils/storage';

const STATUS_ORDER: TodoStatus[] = ['todo', 'in-progress', 'done'];

interface UseTodosReturn {
  todos: Todo[];
  addTodo: (title: string, description?: string, status?: TodoStatus) => void;
  deleteTodo: (id: string) => void;
  moveTodo: (id: string, direction: 'left' | 'right') => void;
}

export function useTodos(): UseTodosReturn {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  function addTodo(title: string, description?: string, status: TodoStatus = 'todo'): void {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      status,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [...prev, newTodo]);
  }

  function deleteTodo(id: string): void {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  function moveTodo(id: string, direction: 'left' | 'right'): void {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id !== id) return todo;
        const currentIndex = STATUS_ORDER.indexOf(todo.status);
        const nextIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex < 0 || nextIndex >= STATUS_ORDER.length) return todo;
        return { ...todo, status: STATUS_ORDER[nextIndex] };
      }),
    );
  }

  return { todos, addTodo, deleteTodo, moveTodo };
}
