import { createReduxModule } from "hooks-for-redux";

const initialState = {
    todos: [
        {
            title: "Example Todo",
            id: Date.now(),
            done: false,
        },
    ],
};

export const [useTodos, { addTodo, deleteTodo, toggleTodoDone }] =
    createReduxModule("todos", initialState, {
        addTodo: (state, payload) => {
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        },
        deleteTodo: (state, payload) => {
            return {
                ...state,
                todos: [
                    ...state.todos.filter((todo) => {
                        return todo.id != payload.id;
                    }),
                ],
            };
        },
        toggleTodoDone: (state, payload) => {
            return {
                ...state,
                todos: [
                    ...state.todos.map((todo) => {
                        if (todo.id == payload.id) {
                            todo.done = !todo.done;
                        }
                        return todo;
                    }),
                ],
            };
        },
    });
