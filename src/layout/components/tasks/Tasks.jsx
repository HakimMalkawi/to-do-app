import { useContext } from "react"
import { TaskContext } from "../../../context/TaskContext"
import { generateTasks } from "./helpers/generateTasks"
import Editor from "./components/editor/Editor"
import SubtaskEditor from "./components/task/components/subtask-editor/SubtaskEditor"
import Button from "../../../components/button/Button"
import "./tasks.css"

const Tasks = () => {
    const { tasks, 
            taskEditorContent, 
            openTaskEditor, 
            subtaskEditorContent, } = useContext( TaskContext )

    const tasksProps = {
        className: "tasks_wrapper",
        "aria-label": "All Current Tasks", }

    const buttonProps = {
        onClick: () => openTaskEditor(),
        title: "Create Task",
        className: "add-task-button_wrapper",
        aria: "Add Task", }
        
    return  <main { ...tasksProps } >
                <section>
                    { tasks.size > 0 && generateTasks( tasks ) }
                    { taskEditorContent && <Editor /> }
                    { subtaskEditorContent && <SubtaskEditor /> }
                </section>
                <Button { ...buttonProps } />
            </main> }

export default Tasks