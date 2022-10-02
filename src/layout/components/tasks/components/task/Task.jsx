import { useContext } from "react"
import { TaskContext } from "../../../../../context/TaskContext"
import { generateSubtasks } from "./helpers/generateSubtasks"
import Button from "../../../../../components/button/Button"
import addSVG from "./assets/add"
import editSVG from "./assets/edit"
import prioritySVG from "./assets/priority"
import removeSVG from "./assets/remove"
import completeSVG from "./assets/complete"
import "./task.css"

const Task = ( { task: { id, title, subtitle, notes, priority, complete, subtasks } } ) => {
    const { openTaskEditor, 
            openSubtaskEditor, 
            togglePriority, 
            removeTask,
            toggleCompletion, } = useContext( TaskContext )

    const taskProps = {
        className: `task_wrapper ${ complete ? "complete" : "" }`,
        "aria-label": "Current Task", }

    const togglePriorityButtonProps = {
        onClick: () => togglePriority( id ),
        svg: prioritySVG,
        className: `toggle-priority-button_wrapper ${ priority ? "priority" : "" }`,
        aria: "Toggle Priority", }

    const editTaskButtonProps = {
        onClick: () => openTaskEditor( id ),
        svg: editSVG, 
        className: "edit-task-button_wrapper",
        aria: "Edit Current Task", }

    const deleteTaskButtonProps = {
        onClick: () => removeTask( id ),
        svg: removeSVG, 
        className: "delete-task-button_wrapper",
        aria: "Delete Current Task", }

    const addSubtaskButtonProps = {
        onClick: () => openSubtaskEditor( id ),
        svg: addSVG, 
        className: "add-subtask-button_wrapper",
        aria: "Add Subtask", }
    
    const toggleCompletionButtonProps = {
        onClick: () => toggleCompletion( id ),
        svg: completeSVG,
        className: "complete-task-button_wrapper",
        aria: "Complete Task", }

    return  <div { ...taskProps } >
                <h1> { title } </h1>
                <h2> { subtitle } </h2>
                <p> { notes } </p>
                { subtasks.length > 0 && generateSubtasks( subtasks, id ) }
                <div>
                    <Button { ...togglePriorityButtonProps } />
                    <Button { ...editTaskButtonProps } />
                    <Button { ...deleteTaskButtonProps } />
                    <Button { ...addSubtaskButtonProps } />
                </div>
                <Button { ...toggleCompletionButtonProps } />
            </div> }

export default Task