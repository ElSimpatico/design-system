import { ReactElement, useMemo } from 'react';
import { UiButton, UiCheckbox } from 'ui-kit-react';

import { Todo, TodoListProps } from './todo-list-props';

import './todo-list.scss';

export function TodoList(props: TodoListProps): ReactElement<TodoListProps> {
    const { type = 'all', todos, onDeleteTodo, onCheckTodo } = props;

    const filteredTodos = useMemo<Todo[]>(() => {
        if (type === 'all') {
            return [...todos];
        }

        return todos.filter((todo: Todo) => {
            return type === 'complete' ? todo.complete : !todo.complete;
        });
    }, [type, todos]);

    return (
        <>
            {filteredTodos.length > 0 ? (
                <ul className="todo-list">
                    {todos
                        .filter((todo: Todo) => {
                            switch (type) {
                                case 'incomplete':
                                    return !todo.complete;
                                case 'complete':
                                    return todo.complete;
                                default:
                                    return todo;
                            }
                        })
                        .map((todo: Todo, index: number) => {
                            return (
                                <li
                                    key={`all-todo_${index}`}
                                    className="todo-list__item"
                                >
                                    <UiCheckbox
                                        accessibleLabel="Check todo"
                                        checked={todo.complete}
                                        onCheckboxChange={() =>
                                            onCheckTodo(todo.id)
                                        }
                                    >
                                        <span>{todo.name}</span>
                                    </UiCheckbox>
                                    <UiButton
                                        accessibleLabel={`Delete todo ${todo.name}`}
                                        onButtonClick={(): void =>
                                            onDeleteTodo(todo.id)
                                        }
                                    >
                                        Delete
                                    </UiButton>
                                </li>
                            );
                        })}
                </ul>
            ) : (
                <p>No registered todos</p>
            )}
        </>
    );
}
