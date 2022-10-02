import { useState, useContext } from "react"
import { TaskContext } from "../../../../../../../context/TaskContext"
import Button from "../../../../../../../components/button/Button"
import "./subtask-editor.css"

const SubtaskEditor = () => {
    const { tasks, 
            addSubtask, 
            updateSubtask, 
            subtaskEditorContent: { id, index }, 
            closeSubtaskEditor, } = useContext( TaskContext )
    
    const existingSubtask = index !== null ? 
        tasks.get( id ).subtasks[ index ] : ""

    const [ input, setInput ] = useState( existingSubtask )

    const handleChange = ( { target: { value } } ) => setInput( value )

    const handleSubmit = event => {
        event.preventDefault()
        
        if ( ! input.trim().length )
            return alert( "Please Enter A Title" )

        index !== null ? 
            updateSubtask( id, input, index ) : 
            addSubtask( id, input ) }

    const subtaskEditorProps = {
        className: "subtask-editor_wrapper",
        role: "none", }
    
    const inputProps = {
        onChange: handleChange,
        value: input,
        placeholder: "Enter Subtask",
        "aria-label": "Update Subtask", }

    const buttonProps = {
        onClick: handleSubmit,
        title: "Submit Subtask",
        className: "update-subtask-button_wrapper",
        aria: "Submit Subtask", }

    const overlayProps = {
        onClick: closeSubtaskEditor,
        "aria-label": "Close Editor" }

    return  <main { ...subtaskEditorProps } >
                <form >
                    <input { ...inputProps } />
                    <Button { ...buttonProps } />
                </form>
                <div { ...overlayProps } ></div>
            </main> }

export default SubtaskEditor