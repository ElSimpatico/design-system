import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

import { InputEventDetail, UiInputCustomEvent } from 'ui-kit';
import { UiButton, UiInput, UiTabs, UiTab, UiTabPanel } from 'ui-kit-react';

import { Todo, TodoList } from './components';
import { LocalStorageSingleton } from './core/utils';

import './App.scss';

export function App(): ReactElement {
    const TODOS_KEY = 'todos';
    const [todoName, setTodoName] = useState<string>('');
    const [todoList, setTodoList] = useState<Todo[]>();

    const storage = useMemo(() => {
        return LocalStorageSingleton.getInstance();
    }, []);

    const onInputChangeHandler = useCallback(
        (event: UiInputCustomEvent<InputEventDetail>): void => {
            setTodoName(event.detail.value);
        },
        [],
    );

    const onAddTodo = useCallback(() => {
        const newTodoList = todoList || [];
        const repeatedTasks = newTodoList.filter((task: Todo) =>
            task.name.match(`${todoName}(\\s\\(\\d*\\))?`),
        );

        const newTodo: Todo = {
            id: Date.now().toString(),
            complete: false,
            name:
                repeatedTasks.length === 0
                    ? todoName
                    : `${todoName} (${repeatedTasks.length})`,
        };

        setTodoList([...newTodoList, newTodo]);
    }, [todoList, todoName, setTodoList]);

    const onDeleteTodoHandler = useCallback(
        (id: string) => {
            const newTodoList = (todoList || []).filter(
                (currentTodo: Todo) => currentTodo.id !== id,
            );
            setTodoList(newTodoList);
        },
        [todoList, setTodoList],
    );

    const onCheckTodoHandler = useCallback(
        (id: string) => {
            const newTodoList = (todoList || []).map((currrentTodo: Todo) => {
                if (currrentTodo.id === id) {
                    currrentTodo.complete = !currrentTodo.complete;
                }
                return currrentTodo;
            });
            setTodoList(newTodoList);
        },
        [todoList, setTodoList],
    );

    const onRemoveAll = useCallback(() => {
        setTodoList([]);
    }, [setTodoList]);

    useEffect(() => {
        const todoList = storage.get<Todo[]>(TODOS_KEY);
        setTodoList(todoList ? [...todoList] : []);
    }, [storage]);

    useEffect(() => {
        if (todoList) {
            storage.set(TODOS_KEY, todoList);
        }
    }, [todoList, storage]);

    return (
        <>
            <div className="container-app">
                <section className="container-app__section">
                    <h3 className="container-app__section-title">To do list</h3>
                    <div className="container-app__section-todo todo-container">
                        <UiInput
                            class="todo-container__input-text"
                            type="text"
                            placeholder="Enter the todo name"
                            accessibleLabel="Enter the todo name"
                            value={todoName}
                            onInputChange={onInputChangeHandler}
                        ></UiInput>
                        <UiButton
                            class="todo-container__button-action"
                            accessibleLabel="Add the new todo"
                            onButtonClick={onAddTodo}
                        >
                            Add
                        </UiButton>
                        <UiButton
                            class="todo-container__button-action"
                            accessibleLabel="Remove all todos"
                            variant="alternative"
                            disabled={(todoList || []).length === 0}
                            onButtonClick={onRemoveAll}
                        >
                            Remove all
                        </UiButton>
                    </div>
                </section>
                <UiTabs>
                    <UiTab
                        slot="tab"
                        accessibleLabel="All todos"
                        accessibleControls="all-panel"
                        identifier="all-tab"
                    >
                        All
                    </UiTab>
                    <UiTab
                        slot="tab"
                        accessibleLabel="Incomplete todos"
                        accessibleControls="incomplete-panel"
                        identifier="incomplete-tab"
                    >
                        Incomplete
                    </UiTab>
                    <UiTab
                        slot="tab"
                        accessibleLabel="Complete todos"
                        accessibleControls="complete-panel"
                        identifier="complete-tab"
                    >
                        Complete
                    </UiTab>
                    <UiTabPanel
                        class="todo-panel"
                        slot="panel"
                        accessibleLabelledBy="all-tab"
                        identifier="all-panel"
                    >
                        <div className="panel-content">
                            <TodoList
                                todos={todoList || []}
                                onCheckTodo={onCheckTodoHandler}
                                onDeleteTodo={onDeleteTodoHandler}
                            ></TodoList>
                        </div>
                    </UiTabPanel>
                    <UiTabPanel
                        slot="panel"
                        accessibleLabelledBy="incomplete-tab"
                        identifier="incomplete-panel"
                    >
                        <div className="panel-content">
                            <TodoList
                                type="incomplete"
                                todos={todoList || []}
                                onCheckTodo={onCheckTodoHandler}
                                onDeleteTodo={onDeleteTodoHandler}
                            ></TodoList>
                        </div>
                    </UiTabPanel>
                    <UiTabPanel
                        slot="panel"
                        accessibleLabelledBy="complete-tab"
                        identifier="complete-panel"
                    >
                        <div className="panel-content">
                            <TodoList
                                type="complete"
                                todos={todoList || []}
                                onCheckTodo={onCheckTodoHandler}
                                onDeleteTodo={onDeleteTodoHandler}
                            ></TodoList>
                        </div>
                    </UiTabPanel>
                </UiTabs>
            </div>
        </>
    );
}
