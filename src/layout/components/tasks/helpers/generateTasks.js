import Task from "../components/task/Task"

export const generateTasks = tasks =>
    [ ...tasks.values() ]
        .sort( ( { priority } ) => priority ? -1 : 1 )
        .map( task => <Task key={ task.id } task={ task } /> )