import { useState, useContext } from "react"
import { TaskContext } from "../../../../../context/TaskContext"
import Button from "../../../../../components/button/Button"
import "./editor.css"

const Editor = () => {
    const { taskEditorContent, 
            closeTaskEditor, 
            updateTask, } = useContext( TaskContext )

    const [ input, setInput ] = useState( taskEditorContent )
    
    const handleChange = ( { target: { value, id } } ) =>
        setInput( prevInput => 
            ( { ...prevInput, [ id ]: value } ) )

    const handleCheckBox = () =>
        setInput( prevInput => 
            ( { ...prevInput, priority: ! prevInput.priority } ) )

    const handleSubmit = event => {
        event.preventDefault()
        if ( ! input.title.trim().length )
            return alert( "Please Enter A Title" )
        updateTask( input ) }

    const editorWrapperProps = {
        className: "editor_wrapper",
        role: "none", }

    const editorProps = {
        onSubmit: handleSubmit,
        className: "editor_form",
        "aria-label": "Task Editor", }

    const titleInputProps = {
        value: input.title,
        onChange: handleChange,
        placeholder: "Enter Title",
        id: "title", 
        type: "text", }

    const subtitleInputProps = {
        value: input.subtitle,
        onChange: handleChange,
        placeholder: "Enter Subtitle",
        id: "subtitle",
        type: "text", }

    const notesInputProps = {
        value: input.notes,
        onChange: handleChange,
        placeholder: "Enter Notes",
        id: "notes",
        type: "text", }

    const priorityInputProps = {
        checked: input.priority,
        onChange: handleCheckBox,
        id: "priority",
        type: "checkbox", }

    const buttonProps = {
        onClick: handleSubmit,
        title: "Submit Changes",
        className: "editor-button_wrapper",
        aria: "Add Or Update Task", }

    const overlayProps = {
        onClick: closeTaskEditor,
        "aria-label": "Close Editor", }

    return  <main { ...editorWrapperProps } >
                <form { ...editorProps } >
                    <input { ...titleInputProps } />
                    <input { ...subtitleInputProps } />
                    <textarea { ...notesInputProps } />
                    <div>
                        <h1>Priority</h1>
                        <input { ...priorityInputProps } />
                    </div>
                    <Button { ...buttonProps } />
                </form>
                <div { ...overlayProps } ></div>
            </main> }

export default Editor