export interface Todo {
    id: string;
    name: string;
    complete: boolean;
}

export interface TodoListProps {
    type?: 'all' | 'incomplete' | 'complete';
    todos: Todo[];
    onCheckTodo: (id: string) => void;
    onDeleteTodo: (id: string) => void;
}
