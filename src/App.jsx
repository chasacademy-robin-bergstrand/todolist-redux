import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import { useTodos, addTodo, deleteTodo, toggleTodoDone } from "./redux/todos";

function App() {
    const [todoInput, setTodoInput] = useState("");

    return (
        <div className="App">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo({
                        title: todoInput,
                        done: false,
                        id: Date.now(),
                    });
                    setTodoInput("");
                }}
            >
                <label htmlFor="todoInput"> New Todo:</label>
                <input
                    value={todoInput}
                    type="text"
                    name="todoInput"
                    id="todoInput"
                    onChange={(e) => setTodoInput(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <div className="todos">
                {useTodos().todos.map((todo) => {
                    {
                        return (
                            <TodoItem
                                title={todo.title}
                                done={todo.done}
                                key={todo.id}
                                id={todo.id}
                                toggleTodoDone={() => {
                                    toggleTodoDone({ id: todo.id });
                                }}
                                deleteTodo={() => {
                                    deleteTodo({ id: todo.id });
                                }}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default App;
