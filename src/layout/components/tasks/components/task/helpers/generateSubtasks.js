import Subtask from "../components/subtask/Subtask"

export const generateSubtasks = ( subtasks, id ) =>
    subtasks.map( ( subtask, index ) => {
        const subtaskProps = 
            { key: index, subtask, index, id, } 

        return <Subtask { ...subtaskProps } /> } )