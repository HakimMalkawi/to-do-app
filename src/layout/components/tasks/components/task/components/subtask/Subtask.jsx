import { useContext } from "react"
import { TaskContext } from "../../../../../../../context/TaskContext"
import Button from "../../../../../../../components/button/Button"
import editSVG from "../../assets/edit"
import removeSVG from "../../assets/remove"
import "./subtask.css"

const Subtask = ( { subtask, index, id } ) => {
    const { openSubtaskEditor, removeSubtask, } = useContext( TaskContext )

    const subtaskProps = {
        className: "subtask_wrapper",
        "aria-label": "Subtask", }

    const removeSubtaskButtonProps = {
        onClick: () => removeSubtask( id, index ),
        svg: removeSVG,
        className: "remove-subtask-button",
        aria: "Remove Subtask", }

    const editSubtaskButtonProps = {
        onClick: () => openSubtaskEditor( id, index ),
        svg: editSVG,
        className: "edit-subtask-button",
        aria: "Edit Subtask", }

    return  <li { ...subtaskProps } >
                <h1>{ subtask }</h1>
                <div>
                    <Button { ...editSubtaskButtonProps } />    
                    <Button { ...removeSubtaskButtonProps } />
                </div>
            </li> }

export default Subtask