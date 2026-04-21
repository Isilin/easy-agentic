import { KanbanBoard } from './components/KanbanBoard/KanbanBoard';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, deleteTodo, moveTodo } = useTodos();

  return (
    <KanbanBoard
      todos={todos}
      onAddTodo={addTodo}
      onDeleteTodo={deleteTodo}
      onMoveTodo={moveTodo}
    />
  );
}

export default App;
