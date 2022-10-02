import { useState, createContext, useEffect } from "react"
import useInitialMount from "../hooks/useInitialMount"

export const ThemeContext = createContext()

export const ThemeProvider = ( { children } ) => {
    const existingTheme = 
        JSON.parse( localStorage.getItem( "dark_mode" ) ) === null ? 
            true :
            JSON.parse( localStorage.getItem( "dark_mode" ) )

    const [ darkMode, setDarkMode ] = useState( existingTheme )
    const initialMount = useInitialMount()

    useEffect( () => {
        if ( ! initialMount )
            localStorage.setItem( 
                "dark_mode", JSON.stringify( darkMode ) ) }, [ darkMode ] )

    const toggleDarkMode = () => setDarkMode( prevTheme => ! prevTheme )

    const providerProps = { value: { darkMode, toggleDarkMode } }

    return  <ThemeContext.Provider { ...providerProps } >
                { children }
            </ThemeContext.Provider> } 