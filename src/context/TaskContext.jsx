import { useState, createContext, useEffect } from "react"
import { setStorage, getStorage } from "../utils/handleStorage"
import { cloneMap } from "../helpers/cloneMap"
import useInitialMount from "../hooks/useInitialMount"
import defaultTaskStructure from "../data/defaultTaskStructure"

export const TaskContext = createContext()

export const TaskProvider = ( { children } ) => {
    const existingTasks = ( getStorage( "tasks" ) || new Map() )
    const [ tasks, setTasks ] = useState( existingTasks )
    const [ taskEditorContent, setTaskEditorContent ] = useState( null )
    const [ subtaskEditorContent, setSubtaskEditorContent ] = useState( null )
    const initialMount = useInitialMount()

    useEffect( () => { 
        if ( ! initialMount ) 
            setStorage( "tasks", tasks ) }, [ tasks ] )

    const updateTask = task => {
        setTasks( prevTasks => cloneMap( prevTasks ).set( task.id, task ) ) 
        closeTaskEditor() }

    const removeTask = id => 
        setTasks( prevTasks => {
            const existingTask = cloneMap( prevTasks )
            existingTask.delete( id )
            return existingTask } )

    const openTaskEditor = ( id = null ) =>
        setTaskEditorContent( id ? 
            tasks.get( id ) : 
            { ...defaultTaskStructure, id: tasks.size + 1 } )

    const closeTaskEditor = () =>
        setTaskEditorContent( null )

    const addSubtask = ( id, value ) => {
        setTasks( prevTasks => {
            const tasks = cloneMap( prevTasks )
            const task = tasks.get( id )
            task.subtasks.push( value )
            tasks.set( id, task )
            return tasks } ) 

        setSubtaskEditorContent( null ) }

    const updateSubtask = ( id, value, index ) => {
        setTasks( prevTasks => {
            const tasks = cloneMap( prevTasks )
            const task = tasks.get( id )
            task.subtasks.splice( index, 1, value )
            tasks.set( id, task )
            return tasks } )

        closeSubtaskEditor() }

    const removeSubtask = ( id, index ) => 
        setTasks( prevTasks => {
            const tasks = cloneMap( prevTasks )
            const task = tasks.get( id )
            task.subtasks.splice( index, 1 )
            tasks.set( id, task )
            return tasks } )

    const openSubtaskEditor = ( id, index = null ) => 
        setSubtaskEditorContent( { id, index } )

    const closeSubtaskEditor = () =>
        setSubtaskEditorContent( null )

    const togglePriority = id => 
        setTasks( prevTasks => {
            const tasks = cloneMap( prevTasks )
            const task = tasks.get( id )
            tasks.set( id, { ...task, priority: ! task.priority } )
            return tasks } )

    const toggleCompletion = id =>
        setTasks( prevTasks => {
            const tasks = cloneMap( prevTasks )
            const task = tasks.get( id )
            tasks.set( id, { ...task, complete: ! task.complete } )
            return tasks } )

    const providerProps = {
        value: {
            tasks,
            taskEditorContent,
            openTaskEditor,
            closeTaskEditor,
            updateTask,
            removeTask,
            subtaskEditorContent,
            openSubtaskEditor,
            closeSubtaskEditor,
            addSubtask,
            updateSubtask,
            removeSubtask,
            togglePriority,
            toggleCompletion, } }

    return  <TaskContext.Provider { ...providerProps } >
                { children }
            </TaskContext.Provider> }