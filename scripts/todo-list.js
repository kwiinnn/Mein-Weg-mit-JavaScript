const todoList = [];

function renderTodoList() {

	let todoListHTML = '';

	todoList.forEach(function (todoObject, index) {
		const { name, dueDate } = todoObject;
		const html = `
			<div>${name}</div>
			<div>${dueDate}</div>
			<button class="delete-button" onclick="
				todoList.splice(${index}, 1);
				renderTodoList();
			">Delete
			</button>`;
		todoListHTML += html;
	} )

	document.querySelector('.js-todo-list')
		.innerHTML = todoListHTML;

}

function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value ;
	const dateInputElement = document.querySelector('.js-due-date');
	const dueDate = dateInputElement.value;
	todoList.push({
		name,
		dueDate
	});
	inputElement.value = dateInputElement.value = '';
	renderTodoList();
}