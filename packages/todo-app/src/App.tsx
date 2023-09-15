import { useCallback, useState } from 'react';

import { InputEventDetail, UiInputCustomEvent } from 'ui-kit';
import {
    defineCustomElements,
    UiButton,
    UiInput,
    UiTabs,
    UiTab,
    UiTabPanel,
} from 'ui-kit-react';

import 'ui-kit/dist/ui-kit/ui-kit.css';

import { Todo, TodoList } from './components';

import './App.scss';

defineCustomElements();

function App() {
    const [todoName, setTodoName] = useState<string>('');
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const onInputChangeHandler = useCallback(
        (event: UiInputCustomEvent<InputEventDetail>): void => {
            setTodoName(event.detail.value);
        },
        [],
    );

    const onButtonClickHandler = useCallback(() => {
        const repeatedTasks = todoList.filter((task: Todo) =>
            task.name.match(`${todoName}(\\s\\(\\d*\\))?`),
        );

        const newTask: Todo = {
            id: Date.now().toString(),
            complete: false,
            name:
                repeatedTasks.length === 0
                    ? todoName
                    : `${todoName} (${repeatedTasks.length})`,
        };

        setTodoList([...todoList, newTask]);
    }, [todoList, todoName]);

    const onDeleteTaskHandler = useCallback(
        (id: string) => {
            const newTaskList = todoList.filter(
                (currentTodo: Todo) => currentTodo.id !== id,
            );
            setTodoList([...newTaskList]);
        },
        [todoList],
    );
    const onCheckTodoHandler = useCallback(
        (id: string) => {
            const newTaskList = todoList.map((currrentTodo: Todo) => {
                if (currrentTodo.id === id) {
                    currrentTodo.complete = !currrentTodo.complete;
                }
                return currrentTodo;
            });
            setTodoList([...newTaskList]);
        },
        [todoList],
    );

    const onRemoveAll = useCallback(() => {
        setTodoList([]);
    }, []);

    return (
        <>
            <div className="container-app">
                <section className="container-app__section">
                    <h2 className="container-app__section-title">To do list</h2>
                    <div className="container-app__section-todo todo-container">
                        <UiInput
                            class="todo-container__input-text"
                            type="text"
                            placeholder="Enter the task name"
                            accessibleLabel="Task"
                            value={todoName}
                            onInputChange={onInputChangeHandler}
                        ></UiInput>
                        <UiButton
                            class="todo-container__button-action"
                            accessibleLabel="Add the new task"
                            onButtonClick={onButtonClickHandler}
                        >
                            Add
                        </UiButton>
                        <UiButton
                            class="todo-container__button-action"
                            accessibleLabel="Remove all todos"
                            variant="alternative"
                            disabled={todoList.length === 0}
                            onButtonClick={onRemoveAll}
                        >
                            Remove all
                        </UiButton>
                    </div>
                </section>
                <UiTabs>
                    <UiTab
                        slot="tab"
                        accessibleLabel="All tasks"
                        accessibleControls="all-panel"
                        identifier="all-tab"
                    >
                        All
                    </UiTab>
                    <UiTab
                        slot="tab"
                        accessibleLabel="Incomplete tasks"
                        accessibleControls="incomplete-panel"
                        identifier="incomplete-tab"
                    >
                        Incomplete
                    </UiTab>
                    <UiTab
                        slot="tab"
                        accessibleLabel="Complete tasks"
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
                                todos={todoList}
                                onCheckTodo={onCheckTodoHandler}
                                onDeleteTodo={onDeleteTaskHandler}
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
                                todos={todoList}
                                onCheckTodo={onCheckTodoHandler}
                                onDeleteTodo={onDeleteTaskHandler}
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
                                todos={todoList}
                                onCheckTodo={onCheckTodoHandler}
                                onDeleteTodo={onDeleteTaskHandler}
                            ></TodoList>
                        </div>
                    </UiTabPanel>
                </UiTabs>
            </div>
        </>
    );
}

export default App;
