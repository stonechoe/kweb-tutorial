type Todo = {
  id: number;
  text: string;
}

const newId = (function() {
  let id = 0;
  return (): number => {
    id += 1;
    return id;
  }
})();

export function setupTodoApp(input: HTMLInputElement, add: HTMLButtonElement, list: HTMLDivElement) {
  let todos: Todo[] = [];

  const renderTodos = () => {
    list.innerHTML = '';
    todos.forEach(todo => {
      const todoElement = document.createElement('div');
      todoElement.innerHTML = `
        <button class="delete-button" data-id="${todo.id}">☑️</button>
        <span>${todo.text}</span>
      `;
      list.appendChild(todoElement);

      const deleteButton = todoElement.querySelector('.delete-button') as HTMLButtonElement;
      deleteButton.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== todo.id);
        list.removeChild(todoElement);
      });
    });
  }

  const addTodo = (newTodo: string) => {
    todos = [...todos, { id: newId(), text: newTodo }];
    renderTodos();
  }

  add.addEventListener('click', () => {
    const newTodo = input.value.trim();
    if (newTodo) {
      addTodo(newTodo);
      input.value = '';
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.isComposing === false) {
      const newTodo = input.value.trim();
      if (newTodo) {
        addTodo(newTodo);
        input.value = '';
      }
    }
  });

  // Initial render
  renderTodos();
}
