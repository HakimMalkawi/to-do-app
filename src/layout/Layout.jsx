import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Navbar from "./components/navbar/Navbar"
import Tasks from "./components/tasks/Tasks"
import "./layout.css"

const Layout = () => {
    const { darkMode } = useContext( ThemeContext )

    const layoutProps = {
        className: `layout_wrapper ${ darkMode ? "dark" : "light" }`,
        role: "none", }

    return  <div { ...layoutProps } >
                <Navbar />
                <Tasks />
            </div> }

export default Layout