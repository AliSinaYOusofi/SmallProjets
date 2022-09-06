const addTodo = document.getElementById("add");
const recentTodo = document.getElementById("recent_todo");
const second = document.querySelector(".second");
const pending = document.getElementById("counter");
const clear = document.getElementById("clear");
let arrayOfTodos = [];
let todoAmount = 0;


function setNewTdo(name) {
    const newIn = document.createElement("input");
    const img = document.createElement("img");
    img.src = "./icons8-delete-100.png";
    img.setAttribute("id", "delete");
    newIn.type = "text";
    newIn.placeholder = name;
    newIn.disabled = true;

    second.appendChild(newIn);
    second.appendChild(img);
    arrayOfTodos.unshift(newIn, img);

    img.addEventListener("click", tar => {
        tar.preventDefault();
        img.style.display = 'none';
        newIn.style.display = 'none';
        todoAmount--;
        pending.innerText = String(todoAmount);
    });
}

addTodo.addEventListener("click", target => {
    target.preventDefault();

    if (Number(recentTodo.value.length) === 0) {
        recentTodo.setAttribute("placeholder", "type a todo");
        return;
    }
    setNewTdo(recentTodo.value);
    todoAmount++;
    pending.innerText = String(todoAmount);
});

clear.addEventListener("click", tar => {
    tar.preventDefault();
    arrayOfTodos.forEach( (item) => {
        item.style.display = 'none';
        todoAmount = 0;
        pending.innerText = String(0);

    });
});