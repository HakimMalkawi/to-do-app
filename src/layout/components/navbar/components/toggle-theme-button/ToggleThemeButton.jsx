import { useContext } from "react"
import { ThemeContext } from "../../../../../context/ThemeContext"
import ToggleButton from "../../../../../components/toggle-button/ToggleButton"
import "./toggle-theme-button.css"

const ToggleThemeButton = () => {
    const { darkMode, toggleDarkMode } = useContext( ThemeContext )

    const toggleThemeButtonProps = {
        className: "toggle-theme-button_wrapper",
        role: "none", }

    const toggleButtonProps = {
        value: darkMode,
        onClick: toggleDarkMode,
        name: "Theme", }

    return  <div { ...toggleThemeButtonProps } >
                <ToggleButton { ...toggleButtonProps } />
            </div> }

export default ToggleThemeButton