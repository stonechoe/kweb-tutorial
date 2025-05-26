import './style.css'
import { setupTodoApp } from './todo.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TODO List 실습 (using no library)</h1>
    <div class="card">
    <input id="todo-input" class="input" type="text" placeholder="Type something..." />
      <button id="add-button" type="button">add</button>
    </div>
    <div id="todo-list">
    </div>
  </div>
`

setupTodoApp(
  document.querySelector<HTMLInputElement>('#todo-input')!,
  document.querySelector<HTMLButtonElement>('#add-button')!,
  document.querySelector<HTMLDivElement>('#todo-list')!
)
