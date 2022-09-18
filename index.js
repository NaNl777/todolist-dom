const arr = [
  {
    text: "Сделать пробежку в 07:00.",
    done: false,
  },
  {
    text: "Complete housework",
    done: true,
  },
  {
    text: "Прогуляться по парку.",
    done: false,
  },
  {
    text: "Пойти на охоту",
    done: false,
  },
  {
    text: "Выучить DOM",
    done: true,
  },
  {
    text: "Выучить DOM",
    done: true,
  },
];

const list = document.querySelector("#list");

function render(array) {
  list.innerHTML = "";

  array.map((item, index) => {
    const task = document.createElement("div");
    task.classList.add("list_item");
    list.appendChild(task);

    const checkboxNode = document.createElement("input");
    checkboxNode.type = "checkbox";
    checkboxNode.checked = item.done;

    checkboxNode.addEventListener("change", () => {
      checkTodo(item);
    });

    if (item.done === true) {
      task.classList.add("list_item_checked"); // задаем модификатор при выполнение дела чтобы мы могли через css дать именно этому блоку стили.
    }

    const removeButtonNode = document.createElement("button");
    removeButtonNode.textContent = "X";
    removeButtonNode.addEventListener("click", () => {
      remove(index);
    });

    const todoTextNode = document.createElement("div");
    todoTextNode.textContent = item.text;
    todoTextNode.classList.add("list_text");

    task.append(checkboxNode, todoTextNode, removeButtonNode);
    list.append(task);
  });
}

  const addTodo = (text) => {
    arr.push({
      text: text,
      done: false,
    });
    console.log(arr);
    return render(arr);
    // return list
  };

  const remove = (index) => {
    arr.splice(index, 1);

    render(arr);
  };

  const checkTodo = (index) => {
    index.done = !index.done;
    render(arr);
  };

  const postButton = document.getElementById("form");
  const formInput = document.getElementById("form_input");
  console.log(formInput.value);
  postButton.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(formInput.value);

    formInput.value = "";
  });


render(arr);
