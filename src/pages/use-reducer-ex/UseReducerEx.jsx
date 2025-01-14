import { useReducer, useState } from "react";

const addToDOToList = (state, action) => {
  return {
    ...state,
    todos: [...state.todos, action.data],
  };
};

const deleteToDo = (state, action) => {
  return {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== action.id),
  };
};

const editToDo = (state, action) => {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, title: action.newTitle } : todo
    ),
  };
};

const manageAction = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addToDOToList(state, action);
    case "DELETE":
      return deleteToDo(state, action);
    case "EDIT":
      return editToDo(state, action);
    default:
      return state;
  }
};

function UseReducerEx() {
  const [toDos, dispatchAction] = useReducer(manageAction, toDoList);
  const [toDoText, setToDotext] = useState("");
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  function addNewToDoList() {
    const newTodo = new newToDoStruc();
    newTodo.id = toDos.todos.length + 1;
    newTodo.title = toDoText;
    dispatchAction({ type: "ADD", data: newTodo });
    setToDotext("");
  }

  // Edit a Todo
  function handleEdit(id, currentTitle) {
    setEditingId(id);
    setEditText(currentTitle);
  }

  function saveEditedTodo() {
    dispatchAction({ type: "EDIT", id: editingId, newTitle: editText });
    setEditingId(null);
    setEditText("");
  }

  // Discard edited Todo
  function discardEdit() {
    setEditingId(null);
    setEditText("");
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            className="input-group mb-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task"
              aria-label="Add a new task"
              onChange={(e) => setToDotext(e.target.value)}
              value={toDoText}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => addNewToDoList()}
            >
              Add
            </button>
          </form>

          {editingId !== null && (
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div className="d-flex">
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={saveEditedTodo}
                >
                  <i className="bi bi-save"></i>{" "}
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={discardEdit}
                >
                  <i className="bi bi-x-circle"></i>{" "}
                </button>
              </div>
            </div>
          )}

          {/* Todo List */}
          <ul className="list-group">
            {toDos &&
              toDos.todos.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <input type="checkbox" className="form-check-input me-2" />
                    {item.title}
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(item.id, item.title)}
                    >
                      <i className="bi bi-pencil-square"></i>{" "}
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        dispatchAction({ type: "DELETE", id: item.id })
                      }
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseReducerEx;

class newToDoStruc {
  constructor() {
    this.id = "";
    this.completed = false;
    this.created_at = new Date().toISOString();
  }
}

const toDoList = {
  todos: [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
      created_at: "2025-01-14T09:00:00Z",
    },
    {
      id: 2,
      title: "Prepare for meeting",
      completed: true,
      created_at: "2025-01-13T15:30:00Z",
    },
    {
      id: 3,
      title: "Call the plumber",
      completed: false,
      created_at: "2025-01-12T10:15:00Z",
    },
  ],
};
